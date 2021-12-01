import axiosIcon from '../../public/icons/axios.png';
import cssIcon from '../../public/icons/css.png';
import htmlIcon from '../../public/icons/html.png';
import indexedDBIcon from '../../public/icons/indexedDB.png';
import jestIcon from '../../public/icons/jest.png';
import javaScriptIcon from '../../public/icons/js.png';
import nestIcon from '../../public/icons/nestJS.png';
import nextJSIcon from '../../public/icons/nextjs.png';
import postgreSQLIcon from '../../public/icons/postgressSQL.png';
import reactIcon from '../../public/icons/react.png';
import restAPIIcon from '../../public/icons/restAPI.png';
import saasIcon from '../../public/icons/sass.png';
import semanticIcon from '../../public/icons/semanticUI.png';
import teamIcon from '../../public/icons/team.png';
import testingLibraryIcon from '../../public/icons/testingLibrary.png';
import typeScriptIcon from '../../public/icons/ts.png';
import viteIcon from '../../public/icons/vite.png';
import webPackIcon from '../../public/icons/webPack.png';
import asyncRaceImg from '../../public/images/asyncRace.png';
import englishForKidsImg from '../../public/images/englishForKids.png';
import matchMatchGameImg from '../../public/images/matchMatchGame.png';
import onlineZooImg from '../../public/images/onlineZoo.png';
import photoFilterImg from '../../public/images/photoFilter.png';
import planningPokerImg from '../../public/images/planningPoker.png';
import reactAppImg from '../../public/images/reactApp.png';
import virtualPianoImg from '../../public/images/virtualPiano.png';

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
      prLink: '',
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
      prLink: '',
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
      prLink: '',
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
      prLink: '',
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
      prLink: '',
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
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/virtual-piano/',
      prLink: '',
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
      info: 'Проект виртуальное пианино был создан мною нахуя?',
      deployLink: 'https://rolling-scopes-school.github.io/vitebsk121-JSFE2021Q1/virtual-piano/',
      prLink: '',
    },
  },
];
