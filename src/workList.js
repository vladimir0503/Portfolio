import landing from '../src/components/images/landing.jpg';
import canban from '../src/components/images/canban.jpg';
import klient from '../src/components/images/klient.jpg';
import weather from '../src/components/images/weather.JPG';

const workList = [
  {
    img: landing,
    link: 'https://vladimir0503.github.io/slider-in-landing-page/',
    title: 'ЛЕНДИНГ С АНИМИРОВАННЫМ СЛАЙДЕРОМ',
    descript:
      'Одностраничный лендинг дизайнерского агенства.\
    Имеется десктопная и мобильная версия. Так же содержит слайдер,\
        написанный на нативном JavaScript.',
  },
  {
    img: canban,
    link: 'https://vladimir0503.github.io/Kanban-board/',
    title: 'KANBAN-BOARD (КАНБАН-ДОСКА)',
    descript:
      'Канбан-доска - это популярный инструмент управления agile-проектами,\
    с помощью которого можно наглядно представить задачи, ограничить объем\
    незавершенной работы и добиться максимальной производительности\
        (или скорости). Приложение написанно на фреймворке React.js',
  },
  {
    img: klient,
    link: 'https://vladimir0503.github.io/bike-accounting-client/',
    title: 'РЕАЛИЗАЦИЯ КЛИЕНТСКОЙ ЧАСТИ САЙТА',
    descript:
      'Известная компания, занимающаяся прокатом велосипедов в крупных\
    городах России, испытывает проблемы с частой кражей их имущества (велосипедов).\
    Как возможное решение проблемы, компания хочет вести учет этих случаев\
    и отслеживать прогресс. Клиентская часть приложения написана полностью на\
        React.js. Для взаимодействия с API сервера использовалась библиотека Axios.',
  },
  {
    img: weather,
    link: 'https://vladimir0503.github.io/Weather_dashboard/',
    title: 'Weather App',
    descript:
      'Небольшое погодное приложение. При написании использовался стек React, Redux, Axios. Для API \
    использовался сервис OpenWeatherMap.',
  },
];

export default workList;
