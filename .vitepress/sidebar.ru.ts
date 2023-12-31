export const sidebar_ru = [
  {
    text: 'Как начать играть?', link: 'ru/HowToStartNewGame'
  },
  {
    text: 'Добыча ресурсов', link: '/MiningResources/',
    items: [
      { text: 'Строительство шахтёрских аванпостов на автомате', link: '/MiningResources/Autotorio' },
      { text: 'Добыча урана', link: '/MiningResources/UraniumOre' },
      { text: 'Плавка ресурсов', link: '/RawResourcesProcessing/' }
    ]
  },
  {
    text: 'Погрузка и разгрузка поездов', link: '/LoadingAndUnloadingTrains/',
    items: [
      { text: 'Синхронизация манипуляторов при разгрузке предметов', link: '/LoadingAndUnloadingTrains/SyncUnloading' },
    ]
  },
  {
    text: 'Производство электроэнергии', link: '/PowerProduction/',
    items: [
      { text: 'Паровая энергия', link: '/PowerProduction/SteamPower' },
      { text: 'Эффективность топлива для производства паровой энергии', link: '/PowerProduction/EfficientFuelForSteamPower' },
      { text: 'Солнечная энергия', link: '/PowerProduction/SolarPower' },
      { text: 'Ядерная энергия', link: '/PowerProduction/NuclearPower' },
      { text: 'Переводим паровые и ядерные электростанции в резерв', link: '/PowerProduction/BackupSteamPower' },
      { text: 'Большая ядерная электростанция', link: '/PowerProduction/HugeNuclearPowerPlant' }
    ]
  }
]
