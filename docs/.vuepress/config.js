module.exports = {
  lang: 'en-US',
  title: 'Awesome Factorio',
  description: 'How to build an awesome factory? It is over 9,000 science packs per minute...',
  base: '/',

  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
  ],

  locales: {
    '/': {
      lang: 'en-US',
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
      '/': {
        label: 'English',
        sidebar: [
          {
            title: 'How to start new game?',
            path: '/HowToStartNewGame',
          },
          {
            title: 'Mining Resources',
            path: '/MiningResources',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/MiningResources/Autotorio',
              '/MiningResources/UraniumOre',
              '/LoadingAndUnloadingTrains'
            ]
          },
          {
            title: 'Raw resources processing',
            path: '/RawResourcesProcessing/',
            collapsable: false,
            sidebarDepth: 0,
            children: [

            ]
          },
          {
            title: 'Power production',
            path: '/PowerProduction',
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
      '/ru/': {
        label: 'Русский',
        sidebar: [
          {
            title: 'Как начать играть?',
            path: '/ru/HowToStartNewGame',
          },
          {
            title: 'Добыча ресурсов',
            path: '/ru/MiningResources',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/ru/MiningResources/Autotorio',
              '/ru/MiningResources/UraniumOre',
              '/ru/LoadingAndUnloadingTrains'
            ]
          },
          {
            title: 'Плавка ресурсов',
            path: '/ru/RawResourcesProcessing/',
            collapsable: false,
            sidebarDepth: 0,
            children: [

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
