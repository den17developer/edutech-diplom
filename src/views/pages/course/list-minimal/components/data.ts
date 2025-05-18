import type { ProductType } from '@/types';

import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses05 from '@/assets/images/courses/4by3/05.jpg';
import courses06 from '@/assets/images/courses/4by3/06.jpg';
import courses07 from '@/assets/images/courses/4by3/07.jpg';
import courses09 from '@/assets/images/courses/4by3/09.jpg';
import courses11 from '@/assets/images/courses/4by3/11.jpg';
import courses12 from '@/assets/images/courses/4by3/12.jpg';
import courses13 from '@/assets/images/courses/4by3/13.jpg';

export const productData: ProductType[] = [
  {
    title: 'Полный курс цифрового маркетинга - 12 курсов в 1.',
    image: courses01,
    isLike: true,
    duration: '6h 56m',
    lectures: 82,
    level: 'Новичок',
    rating: 4.5,
  },
  {
    title: 'Мастер-класс по графическому дизайну',
    image: courses02,
    isLike: false,
    duration: '9h 56m',
    lectures: 65,
    level: 'Любой уровень',
    rating: 4.0,
  },
  {
    title: 'Создайте систему проектирования в Figma',
    image: courses03,
    isLike: false,
    duration: '7h 16m',
    lectures: 32,
    level: 'Средний',
    rating: 4.0,
  },
  {
    title: 'Полная веб-разработка на python',
    image: courses05,
    isLike: true,
    duration: '7h 16m',
    lectures: 32,
    level: 'Средний',
    rating: 4.0,
  },
  {
    title: 'Angular – Полное руководство',
    image: courses06,
    isLike: false,
    duration: '21h 16m',
    lectures: 68,
    level: 'Любой уровень',
    rating: 4.5,
  },
  {
    title: 'Глубокое обучение с помощью React-Native',
    image: courses07,
    isLike: false,
    duration: '10h 16m',
    lectures: 21,
    level: 'Продвинутый',
    rating: 3.5,
  },
  {
    title: 'Javascript: Полное понимание',
    image: courses09,
    isLike: true,
    duration: '7h 16m',
    lectures: 12,
    level: 'Новичок',
    rating: 4.0,
  },
  {
    title: 'Создавайте адаптивные веб-сайты с помощью HTML',
    image: courses11,
    isLike: false,
    duration: '15h 16m',
    lectures: 38,
    level: 'Любой уровень',
    rating: 4.0,
  },
  {
    title: 'Создавайте веб-сайты с помощью CSS',
    image: courses12,
    isLike: false,
    duration: '22h 16m',
    lectures: 16,
    level: 'Продвинутый',
    rating: 4.5,
  },
  {
    title: 'PHP с проектом - CMS',
    image: courses13,
    isLike: true,
    duration: '10h 16m',
    lectures: 9,
    level: 'Средний',
    rating: 4.5,
  },
];
