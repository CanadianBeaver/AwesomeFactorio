import type { PluginConfig } from '@docusaurus/types';

const plugins: PluginConfig[] = [
    require.resolve("docusaurus-plugin-image-zoom"),
    ['docusaurus-plugin-yandex-metrica', { counterID: '97640344' }],
    ['@docusaurus/plugin-google-tag-manager', { containerId: 'GTM-TVJLMXS7' }],
    ['@docusaurus/plugin-google-gtag', { trackingID: 'G-ZCL1B8TRSM', anonymizeIP: true, }],
];

export default plugins;
