import type { ThemeConfig } from '@docusaurus/preset-classic';

const navbar: ThemeConfig['navbar'] = {
    title: '',
    logo: {
        alt: 'Прекрасная Фактория',
        src: 'logo.svg'
    },
    items: [
        {
          type: 'docSidebar',
          sidebarId: 'howToStartSidebar',
          position: 'left',
          label: '🏭Начинаем играть',
          title: 'от первой печи и до запуска первого спутника'
        },
        {
            type: 'docSidebar',
            sidebarId: 'miningSidebar',
            position: 'left',
            label: '⛏️Ресурсы',
            title: 'где копать и по куда сдавать накопанное'
        },
        {
            type: 'docSidebar',
            sidebarId: 'powerSidebar',
            position: 'left',
            label: '⚡Энергия',
            title: 'от пара до ядерной энергии'
        },
        {
            type: 'docSidebar',
            sidebarId: 'circuitNetworkSidebar',
            position: 'left',
            label: '🔌Логическая сеть',
            title: 'автоматизация и умная логика с помощью проводов и сигналов'
        },
        {
            type: 'docSidebar',
            sidebarId: 'additionalSidebar',
            position: 'left',
            label: '🧩Чё исчё?',
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
            to: 'feedback', label: '✉️', position: 'right', title: 'пишите письма'
        },
        { to: '/blog', label: '📝', position: 'right', title: 'блог со статьями и заметками' },
        /*{
          href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
          label: '🐙GitHub',
          position: 'right',
          title: 'загляните в репозиторий и оставьте звёздочку'
        },*/
        {
            href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
            label: '📺Youtube',
            position: 'right',
            title: 'подписывайтесь на канал и слушайте радиопередачи'
        },
        {
            type: 'docSidebar',
            sidebarId: 'adSenseSidebar',
            position: 'right',
            label: '📐',
            title: 'узнайте больше обо всём на свете'
        }
    ],
};

export default navbar;
