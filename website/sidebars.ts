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
      items: ['RawResourcesProcessing/BigOreFoundry']
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
        'PowerProduction/NuclearPower'
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
        'PowerProduction/UpgradingSteamPower',
        'PowerProduction/HugeNuclearPowerPlant'
      ]
    }
  ],

  additionalSidebar: [
    {
      type: 'category',
      label: 'Про FPS, UPS и производительность игры',
      link: {
        type: 'doc',
        id: 'Additionals/FPSandUPS',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Нерды против Гиков',
      link: {
        type: 'doc',
        id: 'Additionals/NerdsVsGeeks'
      },
      items: []
    },
    {
      type: 'category',
      label: 'Параландия',
      link: {
        type: 'doc',
        id: 'Additionals/Paraland',
      },
      items: []
    },
  ],


};

export default sidebars;
