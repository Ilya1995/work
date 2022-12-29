export const APPLICATIONS = [
  {
    iconName: 'cameraCircle',
    title: 'ВИДЕОНАБЛЮДЕНИЕ',
    textList: [
      'Городское видеонаблюдение «Безопасный Город»',
      'Дорожные камеры контроля скорости',
      'Любые системы видеонаблюдения на труднодоступных объектах или объектах с дорогой последней милей (Мосты, камеры контроля скорости и т.д.)',
    ],
    translateX: '-50vw',
  },
  {
    iconName: 'shipCircleFront',
    title: 'СУДОХОДСТВО',
    textList: [
      'Речной транспорт: Сухогрузы, круизные корабли',
      'Морской транспорт: Сухогрузы, танкеры, круизные корабли',
    ],
    translateX: '-50vw',
  },
  {
    iconName: 'busCircle',
    title: 'ТРАНСПОРТ',
    textList: [
      'Общественный транспорт',
      'ГИБДД, МЧС, МВД',
      'Любые дорожные пункты контроля',
      'Спецтранспорт и мобильные объекты особого назначения',
    ],
    translateX: '-50vw',
  },
  {
    iconName: 'pathCircle',
    title: 'ОПЕРАТОРЫ СВЯЗИ',
    textList: [
      'Последняя миля до абонента L3/L2, BGP',
      'Территориально распределенное терминирование',
      'Рентабельная высококачественная связь через спутник для сотовых базовых станций в труднодоступных районах',
      'SLA каналов до 99,99%',
    ],
    translateX: '50vw',
  },
  {
    iconName: 'houseCircle',
    title: 'УДАЛЕННЫЕ ОБЪЕКТЫ',
    textList: ['Точки продаж', 'АЗС', 'Кафе', 'Офисы', 'Частные домовладения'],
    translateX: '50vw',
  },
  {
    iconName: 'oilCircle',
    title: 'ПРОМЫШЛЕННОСТЬ',
    textList: [
      'Карьеры',
      'Буровые станции',
      'Мобильные бригады',
      'Узлы связи для IoT',
    ],
    translateX: '50vw',
  },
];

export const DEFAULT_OBSERVER_OPTIONS = {
  threshold: 0.8,
  triggerOnce: true,
};
