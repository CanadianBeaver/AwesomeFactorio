module.exports = {
  lang: 'ru-RU',
  base: '/',
  title: 'Прекрасная Фактория',
  description: 'Как построить классную фабрику? Это 100500 научных пакетов в минуту...',

  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Awesome Factorio',
      description: 'How to build an awesome factory? It is over 9,000 science packs per minute...',
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Прекрасная Фактория',
      description: 'Как построить классную фабрику? Это 100500 научных пакетов в минуту...',
    }
  },

  themeConfig: {
    logo: '/images/logo.svg',
    displayAllHeaders: true,
    editLinks: false,
    lastUpdated: false,
    displayAllHeaders: true,
    smoothScroll: true,
    locales: {
      '/en/': {
        label: 'English',
        sidebar: [
/*          {
            title: 'How to start new game?',
            path: '/en/HowToStartNewGame',
          },*/
          {
            title: 'Mining Resources',
            path: '/en/MiningResources',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/en/MiningResources/Autotorio',
              '/en/LoadingAndUnloadingTrains',
              '/en/MiningResources/UraniumOre',
              '/en/RawResourcesProcessing/'
            ]
          },
          {
            title: 'Power production',
            path: '/en/PowerProduction',
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
      },
      '/ru/': {
        label: 'Русский',
        sidebar: [
/*          {
            title: 'Как начать играть?',
            path: '/ru/HowToStartNewGame',
          },*/
          {
            title: 'Добыча ресурсов',
            path: '/ru/MiningResources',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/ru/MiningResources/Autotorio',
              '/ru/LoadingAndUnloadingTrains',
              '/ru/MiningResources/UraniumOre',
              '/ru/RawResourcesProcessing/'
            ]
          },
          {
            title: 'Производство электроэнергии',
            path: '/ru/PowerProduction',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/ru/PowerProduction/SteamPower',
              '/ru/PowerProduction/EfficientFuelForSteamPower',
              '/ru/PowerProduction/SolarPower',
              '/ru/PowerProduction/NuclearPower',
              '/ru/PowerProduction/BackupSteamPower',
              '/ru/PowerProduction/HugeNuclearPowerPlant'
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
    'vuepress-plugin-code-copy',
    'vuepress-plugin-smooth-scroll'
  ],

  markdown: {
    plugins: {
       'markdown-it-multimd-table': {
            multiline:  true,
            rowspan:    true,
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
