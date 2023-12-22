module.exports = {
  lang: 'ru-RU',
  base: '/',
  title: 'Awesome Factorio',
  description: 'How to build an awesome factory? It is over 9,000 science packs per minute...',

  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  locales: {
    '/': {
      lang: 'ru-RU',
      description: 'Как построить классную фабрику? Это 100500 научных пакетов в минуту...',
    },
    '/en/': {
      lang: 'en-US',
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    displayAllHeaders: true,
    editLinks: false,
    lastUpdated: false,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Русский',
        sidebar: [
          {
            title: 'Как начать играть?',
            path: '/HowToStartNewGame',
          },
          {
            title: 'Добыча ресурсов',
            path: '/MiningResources/',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/MiningResources/Autotorio',
              '/MiningResources/UraniumOre',
              '/RawResourcesProcessing/'
            ]
          },
          {
            title: 'Погрузка и разгрузка поездов',
            path: '/LoadingAndUnloadingTrains/',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/LoadingAndUnloadingTrains/SyncUnloading'
            ]
          },
          {
            title: 'Производство электроэнергии',
            path: '/PowerProduction/',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/PowerProduction/SteamPower',
              '/PowerProduction/EfficientFuelForSteamPower',
              '/PowerProduction/SolarPower',
              '/PowerProduction/NuclearPower',
              '/PowerProduction/BackupSteamPower',
              '/PowerProduction/HugeNuclearPowerPlant'
            ]
          }
        ]
      },
      '/en/': {
        label: 'English',
        sidebar: [
          {
            title: 'How to start new game?',
            path: '/en/HowToStartNewGame',
          },
          {
            title: 'Mining Resources',
            path: '/en/MiningResources/',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/en/MiningResources/Autotorio',
              '/en/MiningResources/UraniumOre',
              '/en/RawResourcesProcessing/'
            ]
          },
          {
            title: 'Loading and Unloading trains',
            path: '/en/LoadingAndUnloadingTrains/',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/en/LoadingAndUnloadingTrains/SyncUnloading'
            ]
          },
          {
            title: 'Power production',
            path: '/en/PowerProduction/',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/en/PowerProduction/SteamPower',
              '/en/PowerProduction/EfficientFuelForSteamPower',
              '/en/PowerProduction/SolarPower',
              '/en/PowerProduction/NuclearPower',
              '/en/PowerProduction/BackupSteamPower',
              '/en/PowerProduction/HugeNuclearPowerPlant'
            ]
          }
        ]
      }
    }
  },

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search',
    'vuepress-plugin-code-copy'
  ],

  markdown: {
    plugins: {
      'markdown-it-multimd-table': {
        multiline: true,
        rowspan: true,
        headerless: true
      }
    }
  },

  head: [
    ['script', {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-P1GFSP4DQK',
      async: true
    }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P1GFSP4DQK');
    `],
  ],

}
