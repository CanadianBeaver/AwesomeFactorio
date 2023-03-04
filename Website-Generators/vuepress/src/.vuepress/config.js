module.exports = {

  title: 'Awesome Factorio',
  description: 'How to build an awesome factory?',
  base: '/AwesomeFactorio/',

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  locales: {
    '/': {
      lang: 'en-US',
    },
    '/ru/': {
      lang: 'ru-RU',
    }
  },

  themeConfig: {
    logo: '/assets/img/logo.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    smoothScroll: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        /*nav:[
          {
            text: 'Power production',
            link: '/PowerProduction/PowerProduction',
            items: [
              { text: 'Steam power', link: '/PowerProduction/SteamPower' },
              { text: 'Solar power', link: '/PowerProduction/SolarPower' },
              { text: 'Nuclear power', link: '/PowerProduction/NuclearPower' },
            ]
          }
        ],*/
        sidebar: [
          {
            title: 'Power production',
            path: '/PowerProduction/PowerProduction',
            collapsable: false,
            sidebarDepth: -1,
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
        selectText: 'Языки',
        label: 'Русский',
        /*nav: [
          {
            text: 'Производство энергии',
            link: '/ru/PowerProduction/PowerProduction',
            items: [
              { text: 'Паровая энергия', link: '/ru/PowerProduction/SteamPower' },
              { text: 'Солнечная энергия', link: '/ru/PowerProduction/SolarPower' },
              { text: 'Ядерная энергия', link: '/ru/PowerProduction/NuclearPower' },
            ]
          }
        ],*/
        sidebar: [
          {
            title: 'Производство энергии',
            path: '/ru/PowerProduction/PowerProduction',
            collapsable: false,
            sidebarDepth: -1,
            children: [
              '/ru/PowerProduction/SteamPower',
              '/ru/PowerProduction/SolarPower',
              '/ru/PowerProduction/NuclearPower'
            ]
          },
          '/ru/LoadingAndUnloadingTrains'
        ]
      }
    },

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
