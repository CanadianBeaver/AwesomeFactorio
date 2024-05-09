import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import path from 'path';

interface Options {
  // Add any options here if needed
}

const plugin: Plugin<[Options]> = (options) => {
  async function transformer(tree: any) {
    visit(tree, 'link', (node: any) => {
      if (node.url.endsWith(".zip")) {
        var filename = path.parse(node.url).base;
        node.url = "pathname:///saves/" + filename;
      }
    });
  }
  return transformer;
}

export default plugin;
