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
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        /*nav: [
          { text: 'Basics', link: 'BasicPower' }
        ]*/
      },
      '/ru/': {
        selectText: 'Языки',
        label: 'Русский',
        /*nav: [
          { text: 'Основы', link: 'BasicPower' }
        ]*/
      }
    },


  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links',
    'vuepress-plugin-smooth-scroll',
    '@vuepress/search'
  ]
}
