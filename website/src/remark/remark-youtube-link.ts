import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text, Link } from 'mdast';

const YOUTUBE_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:(?:\?|&)(?:start|t)=([0-9]+)s?)?/;

export default function remarkYoutubeLink() {
  return (tree: Root) => {
    visit(tree, 'paragraph', (node: Paragraph, index, parent) => {
      if (node.children.length !== 1) return;

      const child = node.children[0];
      let url = '';

      if (child.type === 'text') {
        url = (child as Text).value.trim();
      } else if (child.type === 'link') {
        url = (child as Link).url.trim();
      }

      const match = url.match(YOUTUBE_REGEX);

      if (match && index !== undefined && parent) {
        const videoId = match[1];
        const timeCode = match[2];

        let embedUrl = `https://www.youtube.com/embed/${videoId}`;
        if (timeCode) {
          embedUrl += `?start=${timeCode}`;
        }

        const jsxNode = {
          type: 'mdxJsxFlowElement',
          name: 'div',
          attributes: [
            { type: 'mdxJsxAttribute', name: 'className', value: 'rm-yt-container' }
          ],
          children: [
            {
              type: 'mdxJsxFlowElement',
              name: 'style',
              attributes: [],
              children: [
                {
                  type: 'text',
                  value: `
                    .rm-yt-container {
                      position: relative;
                      padding-bottom: 56.25%;
                      height: 0;
                      overflow: hidden;
                      margin: 1.5rem 0;
                      border-radius: 8px;
                    }
                    .rm-yt-iframe {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                    }
                  `
                }
              ]
            },
            {
              type: 'mdxJsxFlowElement',
              name: 'iframe',
              attributes: [
                { type: 'mdxJsxAttribute', name: 'src', value: embedUrl },
                { type: 'mdxJsxAttribute', name: 'title', value: 'YouTube video player' },
                { type: 'mdxJsxAttribute', name: 'className', value: 'rm-yt-iframe' },
                { type: 'mdxJsxAttribute', name: 'frameborder', value: '0' },
                {
                  type: 'mdxJsxAttribute',
                  name: 'allow',
                  value: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                },
                { type: 'mdxJsxAttribute', name: 'allowfullscreen', value: true },
              ],
              children: [],
            },
          ],
        };

        parent.children[index] = jsxNode as any;
      }
    });

    return tree;
  };
}