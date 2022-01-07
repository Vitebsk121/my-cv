import axiosIcon from '../assets/icons/axios.png';
import cssIcon from '../assets/icons/css.png';
import htmlIcon from '../assets/icons/html.png';
import indexedDBIcon from '../assets/icons/indexedDB.png';
import jestIcon from '../assets/icons/jest.png';
import javaScriptIcon from '../assets/icons/js.png';
import nestIcon from '../assets/icons/nestJS.png';
import nextJSIcon from '../assets/icons/nextjs.png';
import postgreSQLIcon from '../assets/icons/postgressSQL.png';
import reactIcon from '../assets/icons/react.png';
import restAPIIcon from '../assets/icons/restAPI.png';
import saasIcon from '../assets/icons/sass.png';
import semanticIcon from '../assets/icons/semanticUI.png';
import teamIcon from '../assets/icons/team.png';
import testingLibraryIcon from '../assets/icons/testingLibrary.png';
import typeScriptIcon from '../assets/icons/ts.png';
import viteIcon from '../assets/icons/vite.png';
import webPackIcon from '../assets/icons/webPack.png';
import asyncRaceImg from '../assets/images/asyncRace.png';
import englishForKidsImg from '../assets/images/englishForKids.png';
import matchMatchGameImg from '../assets/images/matchMatchGame.png';
import onlineZooImg from '../assets/images/onlineZoo.png';
import photoFilterImg from '../assets/images/photoFilter.png';
import planningPokerImg from '../assets/images/planningPoker.png';
import reactAppImg from '../assets/images/reactApp.png';
import virtualPianoImg from '../assets/images/virtualPiano.png';

export const arrayOfProjects = [
  {
    id: 1,
    imageURL: virtualPianoImg,
    title: 'Virtual piano',
    shortDescription: 'HTML CSS JS',
    tech: [htmlIcon, cssIcon, javaScriptIcon],
    description: {
      info:
        'Приложение виртуальное пианино позволяет поиграть на одной октаве онлайн, играть можно с помощью клавиатуры' +
        ' или мышки. Есть возможность переключать подсказки "ноты или символы клавиатуры". Доступен режим FullScreen',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/virtual-piano/',
      githubLink: 'https://github.com/Vitebsk121/Vitebsk121-JS2021Q1/tree/virtual-piano',
    },
  },
  {
    id: 2,
    imageURL: photoFilterImg,
    title: 'Photo filter',
    shortDescription: 'HTML CSS JS',
    tech: [htmlIcon, cssIcon, javaScriptIcon],
    description: {
      info:
        'Приложение фильтр для фотографий позволяет отредактировать загруженное изображение или одну из' +
        ' стандартных картинок и сохранить на Вашем устройстве',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/photo-filter/',
      githubLink: 'https://github.com/Vitebsk121/Vitebsk121-JS2021Q1/tree/photo-filter',
    },
  },
  {
    id: 3,
    imageURL: matchMatchGameImg,
    title: 'Match match game',
    shortDescription: 'TS WebPack SCSS IndexedDB',
    tech: [typeScriptIcon, webPackIcon, saasIcon, indexedDBIcon],
    description: {
      info:
        'В игре найди совпадение, нужно запомнить расположение карточек и как можно скорее найти пару открытому' +
        ' изображению. В игре реализована несложная предрегистрация, для сохранения результатов игроков. Можно' +
        ' настроить сложность игры и выбрать тему для генерации изображений. Во время игры реализован таймер и' +
        ' система подсчета очков. Если игрок набрал 0 очков, он не попадает в таблицу результатов. ( для хранения' +
        ' результатов используеться IndexedDB',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/match-match-game/',
      githubLink: 'https://github.com/Vitebsk121/Vitebsk121-JS2021Q1/tree/match-match-game',
    },
  },
  {
    id: 4,
    imageURL: asyncRaceImg,
    title: 'Async Race',
    shortDescription: 'TS WebPack SCSS API',
    tech: [typeScriptIcon, webPackIcon, saasIcon, restAPIIcon],
    description: {
      info:
        'В приложении асинхронная гонка, Вы можете создать автомобиль (выбрать название, модель и цвет) или' +
        ' сгенерировать случайным образом сразу 100 машинок и запустить гонку где машинки будут соревноваться между' +
        ' собой. У каждой машины собственная скорость (данные о скорости автомобиль полуачет от сервера перед' +
        ' стартом гонки и перед каждым заездом значение меняется). Во время гонки в любой момент от сервера может' +
        ' прийти ошибка 500, которая означает поломку двигателя конкретной машинки, тогда автомобиль' +
        ' останавливаеться и выбывает из гонки. Доступна таблица победителей (данные храняться на сервере).' +
        ' Реализована пагинация и адаптив до 500px.',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/async-race/dist/',
      serverLink: 'https://github.com/mikhama/async-race-api',
      githubLink: 'https://github.com/Vitebsk121/Vitebsk121-JS2021Q1/tree/async-race',
    },
  },
  {
    id: 5,
    imageURL: onlineZooImg,
    title: 'Online Zoo',
    shortDescription: 'HTML CSS JS',
    tech: [htmlIcon, cssIcon, javaScriptIcon],
    description: {
      info:
        'В проекте онлайн зоопарк реализована возможность посмотреть онлайн на на животных и увидеть ареал' +
        ' обитания редких животных. Некоторые функции на сайте могут не работать. (например донат выбранному' +
        ' животному)',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/online-zoo/pages/main/index.html',
      githubLink: 'https://github.com/Vitebsk121/Vitebsk121-JS2021Q1/tree/online-zoo',
    },
  },
  {
    id: 6,
    imageURL: englishForKidsImg,
    title: 'English for kids',
    shortDescription: 'TS WebPack SCSS',
    tech: [typeScriptIcon, webPackIcon, saasIcon],
    description: {
      info:
        'В приложении английский для детей в режиме тренировки Вы можете изучать слова на карточках с озвучкой' +
        ' на английском языке, и проверить свои знания в режиме игры. В приложении реализован адаптив для мобильных' +
        ' устройств.',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/english-for-kids/dist/',
      githubLink: 'https://github.com/Vitebsk121/Vitebsk121-JS2021Q1/tree/english-for-kids',
    },
  },
  {
    id: 7,
    imageURL: reactAppImg,
    title: 'React App',
    shortDescription: 'React TS Vite SCSS Axios Jest React Testing Library React Transition Group',
    tech: [reactIcon, typeScriptIcon, viteIcon, saasIcon, axiosIcon, jestIcon, testingLibraryIcon],
    description: {
      info:
        'В приложении реакт апп, реализована возможность поиска, сортировки и фильтрации новостей (используется' +
        ' News API). Для работы News API необходимо запустить проект локально.',
      githubLink: 'https://github.com/Vitebsk121/React2021Q3/tree/react-test',
    },
  },
  {
    id: 8,
    imageURL: planningPokerImg,
    title: 'Planning Poker',
    shortDescription: 'Team Task React TS WebPack SCSS Semantic UI API Next Nest Postgres',
    tech: [
      teamIcon,
      reactIcon,
      typeScriptIcon,
      webPackIcon,
      saasIcon,
      semanticIcon,
      restAPIIcon,
      nextJSIcon,
      nestIcon,
      postgreSQLIcon,
    ],
    description: {
      info: 'Приложение покер планирования позволяет в рамках командной работы прийти к общим договоренностям' +
        ' например о сложности предстоящей работы. Данный проект выполнялся в команде из 3 человек. Я занимался' +
        ' фронт частью, версткой, и учавствовал в написании сокетов. Бэкенд залит на хероку, поэтому после 30 мин' +
        ' простоя он уходит в сон. Если у вас не получается войти, пожалуйста подождите 30 сек, либо обновите' +
        ' страницу и попробуйте снова',
      deployLink: 'https://planning-poker-client.vercel.app/',
      githubLink: 'https://github.com/kagannikita/planning-poker-client',
    },
  },
];
