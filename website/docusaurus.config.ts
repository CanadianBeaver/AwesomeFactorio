import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs/ru',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          sidebarCollapsible: false,
        },
        blog: {
          path: './blog',
          showReadingTime: true,
          blogDescription: 'Делюсь прогрессом и достижениями в игре Factorio'
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
        {
          type: 'search',
          position: 'right',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.youtube.com/@AwesomeFactorio',
          label: 'Youtube',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Разделы',
          items: [
            { label: 'Начало', to: '/HowToStartNewGame', }
          ],
        },
        {
          title: '_',
          items: [
            { label: 'Ресурсы', to: '/MiningResources', },
            { label: 'Плавка', to: '/RawResourcesProcessing', },
            { label: 'Поезда', to: '/LoadingAndUnloadingTrains', }
          ],
        },
        {
          title: '_',
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
          title: 'Ещё',
          items: [
            {
              label: 'Блог',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@AwesomeFactorio',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AwesomeFactorio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

};

export default config;
