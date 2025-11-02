import Link from '@docusaurus/Link';

import gitDataCommits from '@site/src/data/git-commits.json';

function normalizeInternalUrl(url: string): string {
  try {
    const siteBase = typeof window !== 'undefined' ? window.location.origin : '';

    // Если ссылка начинается с текущего сайта — удаляем
    if (url.startsWith(siteBase)) {
      return url.replace(siteBase, '');
    }

    return url;
  } catch {
    return url;
  }
}

const GitCommits: React.FC = () => {
  if (!gitDataCommits || gitDataCommits.length === 0) {
    return <p>Нет данных...</p>;
  }

  return (
    <div>
      <h2>🕒 Последние изменения на сайте</h2>
      {gitDataCommits.map((commit, index) => (
        <div key={index} style={{ padding: '1em', borderBottom: '1px solid #ddd' }}>
          <p>
            <strong>{commit.date}</strong> —{' '}
            {/*<a href={commit.url} target="_blank" rel="noopener noreferrer">*/}
              {commit.message}
            {/*</a>*/}
          </p>
          {commit.pages && commit.pages.length > 0 && (
            <ul>
              {commit.pages.map((pageUrl: string, i: number) => {
                const localPath = normalizeInternalUrl(pageUrl);
                return (
                  <li key={i}>
                    <Link to={localPath}>{localPath}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default GitCommits;
