import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// @ts-ignore
import { rehypeExtendedTable } from 'rehype-extended-table';

const remarkFactorioIcons = require('./src/remark/remark-factorio-icons');
const remarkFactorioSaves = require('./src/remark/remark-factorio-saves');

import i18n from './config/i18n';
import plugins from './config/plugins';
import footer from './config/footer';
import navbar from './config/navbar';

const config: Config = {
  title: 'Awesome Factorio',
  tagline: 'Как построить классную фабрику на 100500 научных пакетов в минуту',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://awesomefactorio.yrfle.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CanadianBeaver', // Usually your GitHub org/user name.
  projectName: 'AwesomeFactorio', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  i18n,

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          exclude: ['README.md'],
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          beforeDefaultRemarkPlugins: [remarkFactorioIcons, remarkFactorioSaves],
          rehypePlugins: [rehypeExtendedTable]
        },
        blog: {
          path: '../blog',
          showReadingTime: false,
          onUntruncatedBlogPosts: 'ignore',
          blogTitle: 'Блог про игру',
          blogDescription: 'Делюсь прогрессом и достижениями в игре Factorio',
          beforeDefaultRemarkPlugins: [remarkFactorioIcons, remarkFactorioSaves],
          rehypePlugins: [rehypeExtendedTable],
          blogSidebarTitle: 'Все записи',
          showLastUpdateTime: true,
          blogSidebarCount: 'ALL',
          feedOptions: {
            title: 'Блог про игру Factorio',
            description: 'Делюсь прогрессом и достижениями в игре Factorio',
            copyright: `Copyright © 2023-${new Date().getFullYear()} AwesomeFactorio.`
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        docsRouteBasePath: '/',
        docsDir: '../docs',
        blogDir: '../blog',
        highlightSearchTermsOnTargetPage: true,
        hashed: true,
        language: ["en", "ru"],
      }),
    ],
    '@docusaurus/theme-mermaid'
  ],

  themeConfig: {
    /*scripts: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7158690744744856',
        async: true,
        crossorigin: 'anonymous'
      }
    ],*/
    image: 'factorio-card.jpg',
    navbar,
    footer,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img'
    }
  } satisfies Preset.ThemeConfig,

  plugins,

};

export default config;
