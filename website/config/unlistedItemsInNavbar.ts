import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type NavbarDropdownItem = {
  label: string;
  to: string;
  className?: string;
  activeClassName?: string;
};

const docsDir = path.resolve(__dirname, '../../docs');

function getUnlistedDocs(dir: string, baseDir: string = docsDir): NavbarDropdownItem[] {
  let results: NavbarDropdownItem[] = [];

  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getUnlistedDocs(filePath, baseDir));
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      if (data.unlisted === true) {
        let relativePath = path.relative(baseDir, filePath)
          .replace(/\\/g, '/')
          .replace(/\.mdx?$/, '');

        relativePath = relativePath.replace(/(README|index)$/i, '');

        if (relativePath.endsWith('/') && relativePath.length > 1) {
          relativePath = relativePath.slice(0, -1);
        }

        results.push({
          label: data.title || (path.basename(file, path.extname(file)).toUpperCase() === 'README'
            ? path.basename(path.dirname(filePath))
            : path.basename(file, path.extname(file))),
          to: relativePath,
        });
      }
    }
  });

  return results;
}

const unlistedItems = getUnlistedDocs(docsDir);
export default unlistedItems;
