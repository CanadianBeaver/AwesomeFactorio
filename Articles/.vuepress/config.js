module.exports = {
    lang: 'en-US',
    title: 'Awesome Factorio',
    description: 'How to build an awesome factory? It is over 9,000 science packs per minute...',
    base: '/AwesomeFactorio/',

    head: [
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
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
      logo: '/assets/img/logo.svg',
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
              title: 'Power production',
              path: '/PowerProduction',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/PowerProduction/SteamPower',
                '/PowerProduction/SolarPower',
                '/PowerProduction/NuclearPower',
                '/PowerProduction/BackupSteamPower',
                '/PowerProduction/HugeNuclearPowerPlant',
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
                '/ru/PowerProduction/HugeNuclearPowerPlant',
              ]
            }
          ]
        }
      }

    },

    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      '@vuepress/search',
      '@vuepress/active-header-links',
      'vuepress-plugin-code-copy',
      'vuepress-plugin-right-anchor'
    ]
  }
