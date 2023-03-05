import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'en-US',
    title: 'Awesome Factorio',
    description: 'How to build an awesome factory? It is over 9,000 science packs per minute...',
    base: '/AwesomeFactorio/',

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

    theme: defaultTheme({
        logo: '/assets/img/logo.svg',
        displayAllHeaders: true,
        editLink: false,
        lastUpdated: false,
        contributors: false,
        locales: {
            '/': {
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
                selectLanguageName: 'Русский',
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
    }),

    plugins: [
        searchPlugin(),
    ],
})