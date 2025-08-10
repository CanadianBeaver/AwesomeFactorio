import type { ThemeConfig } from '@docusaurus/preset-classic';

const footer: ThemeConfig['footer'] = {
    style: 'dark',
    links: [
        {
            items: [
                { label: 'Начинаем играть', to: '/HowToStartNewGame', },
                { label: 'Погрузка и разгрузка', to: '/LoadingAndUnloadingTrains', },
                { label: 'Логическая сеть', to: '/CircuitNetwork', }
            ]
        },
        {

            items: [
                { label: 'Добыча ресурсов', to: '/MiningResources', },
                { label: 'Плавка ресурсов', to: '/RawResourcesProcessing', },
                { label: 'Переработка нефти', to: '/OilRefining', },
                { label: 'Маяки и модули', to: '/RawResourcesProcessing/BeaconsAndModules', }
            ]
        },
        {
            items: [
                { label: 'Производство энергии', to: '/PowerProduction', },
                { label: 'Паровая энергия', to: '/PowerProduction/SteamPower', },
                { label: 'Солнечная энергия', to: '/PowerProduction/SolarPower', },
                { label: 'Ядерная энергия', to: '/PowerProduction/NuclearPower', }
            ]
        },
        {
            items: [
                {
                    label: 'Блог',
                    to: '/blog',
                },
                {
                    label: 'RSS',
                    to: 'pathname:///blog/rss.xml',
                },
                {
                    label: 'Atom',
                    to: 'pathname:///blog/atom.xml',
                }
            ],
        },
        {
            items: [
                /*{
                  label: 'GitHub',
                  href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
                },*/
                {
                    label: 'Youtube',
                    href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
                },
                {
                    label: 'Send e-mail',
                    href: 'mailto:factorio@yrfle.com',
                },
                {
                    label: 'Конфиденциальность',
                    to: '/privacy',
                },
                {
                    label: 'О проекте',
                    to: '/about',
                }
            ]
        },
    ],
    copyright:
        `Copyright © 2023-${new Date().getFullYear()} AwesomeFactorio.<br/>` +
        `Content licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a>.<br/>` +
        `<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank"><img src="/cc_by-nc-nd_icon.svg" alt="License: CC BY-NC-ND 4.0" width="88" height="31"></a>`
};

export default footer;
