import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import { rehypeExtendedTable } from 'rehype-extended-table';

const remarkFactorioIcons = require('./src/remark/remark-factorio-icons');
const remarkFactorioSaves = require('./src/remark/remark-factorio-saves');

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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'/*, 'en'*/],
    localeConfigs: {
      ru: {
        label: 'Русский',
        htmlLang: 'ru-RU',
      }/*,
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },*/
    },
  },

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
    navbar: {
      title: '',
      logo: {
        alt: 'Прекрасная Фактория',
        src: 'logo.svg'
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'howToStartSidebar',
          position: 'left',
          label: 'Начинаем играть'
        },*/
        {
          type: 'docSidebar',
          sidebarId: 'miningSidebar',
          position: 'left',
          label: '⛏️ Ресурсы'
        },
        {
          type: 'docSidebar',
          sidebarId: 'powerSidebar',
          position: 'left',
          label: '⚡ Энергия'
        },
        {
          type: 'docSidebar',
          sidebarId: 'circuitNetworkSidebar',
          position: 'left',
          label: '🔌 Логическая сеть'
        },
        {
          type: 'docSidebar',
          sidebarId: 'additionalSidebar',
          position: 'left',
          label: '🧩 Чё исчё?'
        },
        {
          type: 'search',
          position: 'right'
        },
        {
          to: 'feedback', label: '✉️ Пишите письма', position: 'right'
        },
        /*{
          type: 'localeDropdown',
          position: 'right'
        },*/
        { to: '/blog', label: '📝 Blog', position: 'right' },
        /*{
          href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
          label: '🐙 GitHub',
          position: 'right'
        },*/
        {
          href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
          label: '📺 Youtube',
          position: 'right'
        },
        {
          type: 'docSidebar',
          sidebarId: 'adSenseSidebar',
          position: 'right',
          label: '📐 О проекте'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            { label: 'Начинаем играть', to: '/HowToStartNewGame', },
            { label: 'Погрузка и разгрузка', to: '/LoadingAndUnloadingTrains', },
            { label: 'Логическая сеть', to: '/CircuitNetwork', }
          ]
        },
        {

          items: [
            { label: 'Добыча ресурсов', to: '/MiningResources', },
            { label: 'Плавка ресурсов', to: '/RawResourcesProcessing', },
            { label: 'Переработка нефти', to: '/OilRefining', },
            { label: 'Маяки и модули', to: '/RawResourcesProcessing/BeaconsAndModules', }
          ]
        },
        {
          items: [
            { label: 'Производство энергии', to: '/PowerProduction', },
            { label: 'Паровая энергия', to: '/PowerProduction/SteamPower', },
            { label: 'Солнечная энергия', to: '/PowerProduction/SolarPower', },
            { label: 'Ядерная энергия', to: '/PowerProduction/NuclearPower', }
          ]
        },
        {
          //title: 'Ещё',
          items: [
            {
              label: 'Блог',
              to: '/blog',
            },
            {
              label: 'RSS',
              to: 'pathname:///blog/rss.xml',
            },
            {
              label: 'Atom',
              to: 'pathname:///blog/atom.xml',
            }
          ],
        },
        {
          items: [
            /*{
              label: 'GitHub',
              href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
            },*/
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
            },
            {
              label: 'Send e-mail',
              href: 'mailto:factorio@yrfle.com',
            },
            {
              label: 'Конфиденциальность',
              to: '/privacy',
            },
            {
              label: 'О проекте',
              to: '/about',
            }
          ]
        },
      ],
      copyright: `Copyright © 2023-${new Date().getFullYear()} AwesomeFactorio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    zoom: {
      selector: '.markdown :not(em) > img'
    }
  } satisfies Preset.ThemeConfig,

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    ['docusaurus-plugin-yandex-metrica', { counterID: '97640344' }],
    ['@docusaurus/plugin-google-tag-manager', { containerId: 'GTM-TVJLMXS7' }],
    ['@docusaurus/plugin-google-gtag', { trackingID: 'G-ZCL1B8TRSM', anonymizeIP: true, }],
  ]

};

export default config;
