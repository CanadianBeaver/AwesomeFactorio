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
        'HowToStartNewGame/ManualConstruction',
        'HowToStartNewGame/Mall',
        'HowToStartNewGame/Balancers'
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
      label: 'Маяки и модули',
      link: {
        type: 'doc',
        id: 'RawResourcesProcessing/BeaconsAndModules',
      },
      items: []
    },
    {
      type: 'category',
      label: 'Погрузка и разгрузка поездов',
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

  circuitNetworkSidebar: [
    {
      type: 'category',
      label: 'Логическая сеть и комбинаторы',
      link: {
        type: 'doc',
        id: 'CircuitNetwork/README',
      },
      items: [
        'CircuitNetwork/Writing',
        'CircuitNetwork/SimpleExamples',
        'CircuitNetwork/Combinators'
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
    /*{
      type: 'category',
      label: 'Надписи на полях',
      link: {
        type: 'doc',
        id: 'Additionals/Labelling',
      },
      items: []
    },*/
    {
      type: 'category',
      label: 'Сохранёнки разных игр',
      link: {
        type: 'doc',
        id: 'Additionals/SavedGames',
      },
      items: []
    }
  ]

};

export default sidebars;
