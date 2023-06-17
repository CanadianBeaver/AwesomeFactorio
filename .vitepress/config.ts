import { defineConfig } from 'vitepress'
import { sidebar_en } from './sidebar.en'
import { sidebar_ru } from './sidebar.ru'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Awesome Factorio",
  description: "How to build an awesome factory? It is over 9,000 science packs per minute...",
  base: "/",
  cleanUrls: true,
  srcDir: "./docs",
  ignoreDeadLinks: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        sidebar: sidebar_en
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      dir: '/ru/',
      title: 'Прекрасная Фактория',
      description: 'Как построить классную фабрику? Это 100500 научных пакетов в минуту...',
      themeConfig: {
        sidebar: sidebar_ru
      }
    }
  },

  themeConfig: {
    logo: '/images/logo.svg',

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@AwesomeFactorio' },
      { icon: 'twitter', link: 'https://t.me/AwesomeFactorio' },
      { icon: 'github', link: 'https://github.com/CanadianBeaver/AwesomeFactorio' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          ru: {
            translations: {
              button: {
                buttonText: 'Поиск',
              },
              modal: {
                noResultsText: 'ничего не найдено',
                resetButtonTitle: 'удалить текст поиска',
                displayDetails: 'показывать детальную информацию',
                footer: {
                  selectText: 'перейти',
                  navigateText: 'выбор',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    }
  }
})
