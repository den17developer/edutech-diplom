import type { CourseType } from '@/types';
import { currency } from '@/helpers/constants';
import type { CounterType, TrendingType } from '@/views/demos/default/components/types';
import { faTv, faUserTie, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { BIconPatchCheckFill } from 'bootstrap-icons-vue';

import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';
import courses04 from '@/assets/images/courses/4by3/04.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses14 from '@/assets/images/courses/4by3/14.jpg';
import courses15 from '@/assets/images/courses/4by3/15.jpg';
import courses17 from '@/assets/images/courses/4by3/17.jpg';
import courses16 from '@/assets/images/courses/4by3/16.jpg';

import avatar10 from '@/assets/images/avatar/10.jpg';
import avatar04 from '@/assets/images/avatar/04.jpg';
import avatar09 from '@/assets/images/avatar/09.jpg';
import avatar01 from '@/assets/images/avatar/01.jpg';

export const counterData: CounterType[] = [
  {
    title: "Онлаин курсов",
    count: 10,
    suffix: "K",
    icon: faTv,
    variant: "warning"
  },
  {
    title: "Опытных преподавателей",
    count: 200,
    suffix: "+",
    icon: faUserTie,
    variant: "blue"
  },
  {
    title: "Обученных студентов",
    count: 60,
    suffix: "K+",
    icon: faUserGraduate,
    variant: "purple"
  },
  {
    title: "Сертифицированных курсов",
    count: 6,
    suffix: "K+",
    icon: BIconPatchCheckFill,
    variant: "info"
  }
];

export const courseList: CourseType[] = [
  {
    image: courses08,
    badges: [
      {
        text: 'Любой уровень',
        class: 'purple',
      }
    ],
    title: 'Эскиз от А до Я: для дизайнера приложений',
    description: 'Полный путь создания эскиза для мобильных приложений — от идеи до готового прототипа.',
    isLike: false,
    rating: 4.0,
    duration: '12h 56m',
    lectures: 15,
    type: 'development',
  },
  {
    image: courses02,
    badges: [
      {
        text: 'Новичок',
        class: 'success',
      }
    ],
    title: 'Графический дизайн мастер-класс',
    description:
      'Основы графического дизайна за один мастер-класс: практические техники, стиль и вдохновение.',
    isLike: true,
    rating: 4.5,
    duration: '9h 56m',
    lectures: 65,
    type: 'graphic',
  },
  {
    image: courses03,
    badges: [
      {
        text: 'Новичок',
        class: 'success',
      }
    ],
    title: 'Создайте систему проектирования в Figma',
    description:
      'Научитесь создавать продуманную и удобную систему проектирования в Figma для быстрых и эффективных интерфейсов.',
    isLike: false,
    rating: 4.5,
    duration: '5h 56m',
    lectures: 32,
    type: 'marketing',
  },
  {
    image: courses07,
    badges: [
      {
        text: 'Новичок',
        class: 'success',
      }
    ],
    title: 'Глубокое обучение с помощью React-Native',
    description:
      'Освойте глубокое обучение и создавайте мобильные приложения с помощью React Native.',
    isLike: true,
    rating: 4.0,
    duration: '18h 56m',
    lectures: 99,
    type: 'finance',
  },
  {
    image: courses11,
    badges: [
      {
        text: 'Любой уровень',
        class: 'purple',
      }
    ],
    title: 'Создавайте адаптивные веб-сайты с помощью HTML',
    description:
      'Научитесь создавать современные адаптивные сайты с помощью HTML с нуля.',
    isLike: true,
    rating: 4.0,
    duration: '15h 30m',
    lectures: 68,
    type: 'development',
  },
  {
    image: courses12,
    badges: [
      {
        text: 'Новичок',
        class: 'success',
      }
    ],
    title: 'Создавайте веб-сайты с помощью CSS',
    description:
      'Научитесь создавать стильные и современные веб-сайты с помощью CSS.',
    isLike: false,
    rating: 4.5,
    duration: '36h 30m',
    lectures: 72,
    type: 'development',
  },
  {
    image: courses04,
    badges: [
      {
        text: 'Любой уровень',
        class: 'purple',
      }
    ],
    title: 'Изучайте Invision',
    description:
      'Курс по InVision: научитесь создавать интерактивные прототипы и дизайны для веб и мобильных приложений.',
    isLike: true,
    rating: 3.5,
    duration: '6h 56m',
    lectures: 82,
    type: 'graphic',
  },
  {
    image: courses09,
    badges: [
      {
        text: 'Любой уровень',
        class: 'purple',
      }
    ],
    title: 'JavaScript: Полное понимание',
    description:
      'Курс охватывает основы и продвинутые концепции JavaScript, обучая созданию динамичных веб-страниц и эффективному решению задач с использованием этого мощного языка программирования.',
    isLike: false,
    rating: 5.0,
    duration: '35h 20m',
    lectures: 89,
    type: 'marketing',
  },
];

export const trendingCourse: TrendingType[] = [
  {
    image: courses14,
    ribbon: 'Free',
    badges: [
      {
        text: 'Дезайн',
        class: 'primary',
      },
      {
        text: 'Новичок',
        class: 'dark',
      },
    ],
    title: 'Полный курс маркетинга',
    rating: 4.5,
    reviews: 6500,
    students: 6500,
    time: '6h 56m',
    lectures: 82,
    instructor: {
      name: 'Джоб Джонсон',
      avatar: avatar10,
    },
    price: 'Бесплатно',
  },
  {
    image: courses15,
    badges: [
      {
        text: 'Програмирование',
        class: 'primary',
      },
      {
        text: 'Любой уровень',
        class: 'dark',
      },
    ],
    title: 'Angular – Полное руководство',
    rating: 4.0,
    reviews: 3500,
    students: 4500,
    time: '12h 45m',
    lectures: 65,
    instructor: {
      name: 'Джоб Джонсон',
      avatar: avatar04,
    },
    price: currency + '9899',
  },
  {
    image: courses17,
    badges: [
      {
        text: 'Дезайн',
        class: 'primary',
      },
      {
        text: 'Новичок',
        class: 'dark',
      },
    ],
    title: 'Мастерство тайм-менеджмента',
    rating: 4.5,
    reviews: 2000,
    students: 8000,
    time: '24h 56m',
    lectures: 55,
    instructor: {
      name: 'Джон Джонсон',
      avatar: avatar09,
    },
    price: currency + '4999',
  },
  {
    image: courses16,
    badges: [
      {
        text: 'Дезайн',
        class: 'primary',
      },
      {
        text: 'Новичок',
        class: 'dark',
      },
    ],
    title: 'Мастерство тайм-менеджмента',
    rating: 4.0,
    reviews: 2000,
    students: 1200,
    time: '9h 56m',
    lectures: 21,
    instructor: {
      name: 'Джон Джонсон',
      avatar: avatar01,
    },
    price: currency + '2000',
  },
];