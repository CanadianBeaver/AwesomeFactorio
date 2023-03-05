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
              title: 'Power production',
              path: '/PowerProduction/PowerProduction',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/PowerProduction/SteamPower',
                '/PowerProduction/SolarPower',
                '/PowerProduction/NuclearPower'
              ]
            },
            '/LoadingAndUnloadingTrains'
          ]
        },
        '/ru/': {
          label: 'Русский',
          sidebar: [
            {
              title: 'Производство энергии',
              path: '/ru/PowerProduction/PowerProduction',
              collapsable: false,
              sidebarDepth: 0,
              children: [
                '/ru/PowerProduction/SteamPower',
                '/ru/PowerProduction/SolarPower',
                '/ru/PowerProduction/NuclearPower'
              ]
            },
            '/ru/LoadingAndUnloadingTrains'
          ]
        }
      }

    },

    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      '@vuepress/search',
      '@vuepress/active-header-links',
      ['vuepress-plugin-code-copy', true]
    ]
  }
