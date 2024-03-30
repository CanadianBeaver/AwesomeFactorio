import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import { rehypeExtendedTable } from 'rehype-extended-table';

//import { remarkFactorioIcons } from './src/remark/remark-factorio-icons';
const remarkFactorioIcons = require('./src/remark/remark-factorio-icons');

const config: Config = {
  title: 'Awesome Factorio',
  tagline: 'Как построить классную фабрику? Это 100500 научных пакетов в минуту...',
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
  onBrokenAnchors: 'warn', // TODO: change to throw when error will be fixed in new docusaurus
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
          beforeDefaultRemarkPlugins: [remarkFactorioIcons],
          rehypePlugins: [rehypeExtendedTable]
        },
        blog: {
          path: '../blog',
          showReadingTime: true,
          blogDescription: 'Делюсь прогрессом и достижениями в игре Factorio',
          beforeDefaultRemarkPlugins: [remarkFactorioIcons],
          rehypePlugins: [rehypeExtendedTable],
          blogSidebarTitle: 'Все записи',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'G-P1GFSP4DQK',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'factorio-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Прекрасная Фактория',
        src: 'logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'miningSidebar',
          position: 'left',
          label: 'Ресурсы',
        },
        {
          type: 'docSidebar',
          sidebarId: 'powerSidebar',
          position: 'left',
          label: 'Энергия',
        },
        /*{
          type: 'docSidebar',
          sidebarId: 'additionalSidebar',
          position: 'left',
          label: 'Чё исчё?',
        },*/
        /*{
          type: 'localeDropdown',
          position: 'right'
        },*/
        {
          type: 'search',
          position: 'right',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        /*{
          href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
          label: 'GitHub',
          position: 'right',
        },*/
        {
          href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
          label: 'Youtube',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            { label: 'Начало', to: '/HowToStartNewGame', },
            { label: 'Поезда', to: '/LoadingAndUnloadingTrains', }
          ],
        },
        {

          items: [
            { label: 'Ресурсы', to: '/MiningResources', },
            { label: 'Плавка', to: '/RawResourcesProcessing', }
          ],
        },
        {
          items: [
            { label: 'Энергия', to: '/PowerProduction', },
          ],
        },
        /*
        {
          title: 'Другое',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/3by95Rm7wQ',
            },
            {
              label: 'Telegram',
              href: 'https://telegram.com/AwesomeFactorio',
            },
          ],
        },
        */
        {
          //title: 'Ещё',
          items: [
            {
              label: 'Блог',
              to: '/blog',
            },
            /*{
              label: 'GitHub',
              href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
            },*/
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
            }
          ],
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

  plugins: [require.resolve("docusaurus-plugin-image-zoom")]

};

export default config;
