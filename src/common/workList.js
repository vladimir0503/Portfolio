import { landing, canban, klient, weather, finances, allFilms } from './images'

const workList = [
  {
    img: landing,
    link: 'https://vladimir0503.github.io/slider-in-landing-page/',
    title: 'ЛЕНДИНГ С АНИМИРОВАННЫМ СЛАЙДЕРОМ',
    descript:
      'Одностраничный лендинг дизайнерского агенства.\n' +
      'Имеется десктопная и мобильная версия. Так же содержит слайдер,\n' +
      'написанный на нативном JavaScript.',
  },
  {
    img: canban,
    link: 'https://vladimir0503.github.io/Kanban-board/',
    title: 'KANBAN-BOARD (КАНБАН-ДОСКА)',
    descript:
      'Канбан-доска - это популярный инструмент управления agile-проектами,\n' +
      'с помощью которого можно наглядно представить задачи, ограничить объем\n' +
      'незавершенной работы и добиться максимальной производительности\n' +
      '(или скорости). Приложение написанно на фреймворке React.js',
  },
  {
    img: klient,
    link: 'https://vladimir0503.github.io/bike-accounting-client/',
    title: 'РЕАЛИЗАЦИЯ КЛИЕНТСКОЙ ЧАСТИ САЙТА',
    descript:
      'Известная компания, занимающаяся прокатом велосипедов в крупных\n' +
      'городах России, испытывает проблемы с частой кражей их имущества (велосипедов).\n' +
      'Как возможное решение проблемы, компания хочет вести учет этих случаев\n' +
      'и отслеживать прогресс. Клиентская часть приложения написана полностью на\n' +
      'React.js. Для взаимодействия с API сервера использовалась библиотека Axios.',
  },
  {
    img: weather,
    link: 'https://weather-dashboard-pink.vercel.app/',
    title: 'Weather App',
    descript:
      'Небольшое погодное приложение. При написании использовался стек React, Redux, Axios. Для API \n' +
      'использовался сервис OpenWeatherMap.',
  },
  {
    img: finances,
    link: 'https://financial-control.surge.sh/',
    title: 'My finances',
    descript:
      'Приложение для контроля личных финансов. Реализована возможность регистрации пользователей. \n' +
      'Стек - React, Redux. \n' +
      'Для бэкенда используется Firebase.'
  },
  {
    img: allFilms,
    link: 'https://all-films.surge.sh/',
    title: 'All films',
    descript:
      'Приложение для поиска фильмов. Информация о фильмах берется с базы данных кинопоиска. \n' +
      'Стек - React, Redux.'
  },
];

export default workList;
