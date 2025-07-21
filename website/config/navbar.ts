import type { ThemeConfig } from '@docusaurus/preset-classic';

const navbar: ThemeConfig['navbar'] = {
    title: '',
    logo: {
        alt: 'Прекрасная Фактория',
        src: 'logo.svg',
        srcDark: 'logo-dark.svg',
    },
    items: [
        {
            type: 'doc',
            docId: 'HowToStartNewGame/README',
            label: 'Начинаем играть', //label: '🏭 Начинаем играть',
            title: 'от первой печи и до запуска первого спутника'
        },
        {
            type: 'doc',
            docId: 'MiningResources/README',
            label: 'Ресурсы', //label: '⛏️ Ресурсы',
            title: 'где копать и по куда сдавать накопанное'
        },
        {
            type: 'doc',
            docId: 'PowerProduction/README',
            label: 'Энергия', // label: '⚡ Энергия',
            title: 'от пара до ядерной энергии'
        },
        {
            type: 'doc',
            docId: 'CircuitNetwork/README',
            label: 'Логическая сеть', //label: '🔌 Логическая сеть',
            title: 'автоматизация и умная логика с помощью проводов и сигналов'
        },
        {
            type: 'doc',
            docId: 'Additionals/QualityAssessment',
            label: 'Чё исчё?', //label: '🧩 Чё исчё?',
            title: 'всяка дополнительная дичь и полезняшки'
        },
        {
            type: 'search',
            position: 'right'
        },
        /*{
          type: 'localeDropdown',
          position: 'right'
        },*/
        {
            type: 'doc',
            docId: 'Feedback',
            label: '✉️ Contact us',
            title: 'пишите письма',
            position: 'right'
        },
        {
            to: '/blog',
            label: '📝 Blog',
            title: 'блог со статьями и заметками',
            position: 'right'
         },
        /*{
          href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
          label: '🐙 GitHub',
          position: 'right',
          title: 'загляните в репозиторий и оставьте звёздочку'
        },*/
        {
            href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
            label: '📺 Youtube',
            title: 'подписывайтесь на канал и слушайте радиопередачи',
            position: 'right'
        },
        {
            type: 'docSidebar',
            sidebarId: 'adSenseSidebar',
            label: '📐 About us',
            title: 'узнайте больше обо всём на свете',
            position: 'right'
        }
    ],
};

export default navbar;
