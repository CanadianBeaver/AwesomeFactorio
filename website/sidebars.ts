import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  howToStartSidebar: [
    {
      type: 'category',
      label: 'Начало',
      link: {
        type: 'doc',
        id: 'HowToStartNewGame',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Добыча ресурсов',
      link: {
        type: 'doc',
        id: 'MiningResources/README',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Производство энергии',
      link: {
        type: 'doc',
        id: 'PowerProduction/README',
      },
      items: []
    }
  ],

  powerSidebar: [
    {
      type: 'category',
      label: 'Производство энергии',
      link: {
        type: 'doc',
        id: 'PowerProduction/README',
      },
      items: [
        'PowerProduction/SteamPower',
        'PowerProduction/EfficientFuelForSteamPower',
        'PowerProduction/SolarPower',
        'PowerProduction/NuclearPower',
        'PowerProduction/BackupSteamPower',
        'PowerProduction/UpgradingSteamPower',
        'PowerProduction/HugeNuclearPowerPlant'
      ]
    },
  ],

  miningSidebar: [
    {
      type: 'category',
      label: 'Добыча ресурсов',
      link: {
        type: 'doc',
        id: 'MiningResources/README',
      },
      items: [
        'MiningResources/Autotorio',
        'MiningResources/UraniumOre'
      ]
    },
    {
      type: 'category',
      label: 'Плавка ресурсов',
      link: {
        type: 'doc',
        id: 'RawResourcesProcessing/README',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Погрузка и разгрузка',
      link: {
        type: 'doc',
        id: 'LoadingAndUnloadingTrains/README',
      },
      items: ['LoadingAndUnloadingTrains/SyncUnloading']
    }
  ],

};

export default sidebars;
