import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

  howToStartSidebar: [
    {
      type: 'category',
      label: 'Начинаем играть эффективно',
      link: {
        type: 'doc',
        id: 'HowToStartNewGame/README'
      },
      items: [
        'HowToStartNewGame/Quickbar',
        'HowToStartNewGame/Pollution'
      ]
    },
    {
      type: 'category',
      label: 'Оборона макаронной фабрики',
      link: {
        type: 'doc',
        id: 'HowToStartNewGame/FactoryDefense'
      },
      items: [
        'HowToStartNewGame/CombatTactics',
        'HowToStartNewGame/TankAndSpidertron'
      ]
    },
    {
      type: 'category',
      label: 'Массовая фортификация',
      link: {
        type: 'doc',
        id: 'MilitaryOutposts/README'
      },
      items: [
        'MilitaryOutposts/Smallest',
        'MilitaryOutposts/Biggest'
      ]
    },
    {
      type: 'category',
      label: 'Логическая сеть и комбинаторы',
      link: {
        type: 'doc',
        id: 'CircuitNetwork/README',
      },
      items: [
        'CircuitNetwork/SimpleExamples',
        'CircuitNetwork/Combinators',
        'CircuitNetwork/Writing',
      ]
    },
    {
      type: 'category',
      label: 'Строительство железных дорог',
      link: {
        type: 'doc',
        id: 'LoadingAndUnloadingTrains/LeftHandTraffic',
      },
      items: [
        'LoadingAndUnloadingTrains/README',
        'LoadingAndUnloadingTrains/Jlovber',
        'LoadingAndUnloadingTrains/SyncUnloading'
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
      label: 'Переработка нефти',
      link: {
        type: 'doc',
        id: 'OilRefining/README',
      },
      items: [ ]
    },
    {
      type: 'category',
      label: 'Маяки и модули',
      link: {
        type: 'doc',
        id: 'RawResourcesProcessing/BeaconsAndModules',
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
        'PowerProduction/BackupSteamPower'
      ]
    },
    {
      type: 'category',
      label: 'Паровая энергия',
      link: {
        type: 'doc',
        id: 'PowerProduction/SteamPower',
      },
      items: [
        'PowerProduction/UpgradingSteamPower',
        'PowerProduction/EfficientFuelForSteamPower'
      ]
    },
    {
      type: 'category',
      label: 'Солнечная энергия',
      link: {
        type: 'doc',
        id: 'PowerProduction/SolarPower',
      },
      items: [ ]
    },
    {
      type: 'category',
      label: 'Ядерная энергия',
      link: {
        type: 'doc',
        id: 'PowerProduction/NuclearPower',
      },
      items: [ 'PowerProduction/HugeNuclearPowerPlant' ]
    }
  ],

  additionalSidebar: [
    {
      type: 'category',
      label: 'Оценка качества чертежей',
      link: {
        type: 'doc',
        id: 'Additionals/QualityAssessment',
      },
      items: []
    },
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
      label: 'Послания инопланетян',
      link: {
        type: 'doc',
        id: 'Additionals/Labelling',
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
    {
      type: 'category',
      label: 'Сохранёнки разных игр',
      link: {
        type: 'doc',
        id: 'Additionals/SavedGames',
      },
      items: []
    }
  ],

  adSenseSidebar: [
    {
      type: 'doc',
      id: 'About',
    },
    {
      type: 'doc',
      id: 'Privacy',
    },
    {
      type: 'doc',
      id: 'Terms'
    },
    {
      type: 'doc',
      id: 'Feedback',
    },
    {
      type: 'doc',
      id: 'Latest',
    }
  ]

};

export default sidebars;
