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
          label: '🏭Начинаем играть'
        },
        {
            type: 'docSidebar',
            sidebarId: 'miningSidebar',
            position: 'left',
            label: '⛏️Ресурсы'
        },
        {
            type: 'docSidebar',
            sidebarId: 'powerSidebar',
            position: 'left',
            label: '⚡Энергия'
        },
        {
            type: 'docSidebar',
            sidebarId: 'circuitNetworkSidebar',
            position: 'left',
            label: '🔌Логическая сеть'
        },
        {
            type: 'docSidebar',
            sidebarId: 'additionalSidebar',
            position: 'left',
            label: '🧩Чё исчё?'
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
            to: 'feedback', label: '✉️ Пишите письма', position: 'right'
        },
        { to: '/blog', label: '📝Blog', position: 'right' },
        /*{
          href: 'https://github.com/CanadianBeaver/AwesomeFactorio',
          label: '🐙GitHub',
          position: 'right'
        },*/
        {
            href: 'https://www.youtube.com/@AwesomeFactorio?sub_confirmation=1',
            label: '📺Youtube',
            position: 'right'
        },
        {
            type: 'docSidebar',
            sidebarId: 'adSenseSidebar',
            position: 'right',
            label: '📐О проекте'
        }
    ],
};

export default navbar;
