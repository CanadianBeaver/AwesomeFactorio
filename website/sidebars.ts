import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  howToStartSidebar: [
    {
      type: 'category',
      label: 'Начало',
      link: {
        type: 'doc',
        id: 'HowToStartNewGame/README',
      },
      items: [
        'HowToStartNewGame/BurnerDevices',
      ]
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
        'PowerProduction/SolarPower',
        'PowerProduction/NuclearPower',
        'PowerProduction/HugeNuclearPowerPlant'
      ]
    },
    {
      type: 'category',
      label: 'Сопутствующие вопросы',
      link: {
        type: 'generated-index',
        slug: 'PowerProduction/Questions'
      },
      items: [
        'PowerProduction/EfficientFuelForSteamPower',
        'PowerProduction/BackupSteamPower',
        'PowerProduction/UpgradingSteamPower'
      ]
    }
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
