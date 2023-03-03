//const { nav, sidebar } = require("vuepress-bar");

module.exports = {
  title: "Awesome Factorio",
  patterns: ['**/*.md', '**/*.vue'],
//  themeConfig: { nav, sidebar },
  locales: {
    '/': {
      lang: 'English'
    },
    '/ru/': {
      lang: 'Русский'
    }
  },
  /*markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-abbr'))
      md.use(require('markdown-it-plantuml'))
      md.use(require('markdown-it-textual-uml'))
    }
  }*/
}
