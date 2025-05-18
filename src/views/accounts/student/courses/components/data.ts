import type { CourseType } from '@/types';
import courses08 from '@/assets/images/courses/4by3/08.jpg';
import courses03 from '@/assets/images/courses/4by3/03.jpg';
import courses05 from '@/assets/images/courses/4by3/05.jpg';
import courses01 from '@/assets/images/courses/4by3/01.jpg';
import courses02 from '@/assets/images/courses/4by3/02.jpg';

export const myCourses: CourseType[] = [
  {
    title: 'Создание масштабируемых API-интерфейсов с помощью GraphQL',
    image: courses08,
    progress: 85,
    lectures: 56,
    completed: 40,
  },
  {
    title: 'Создайте систему проектирования в Figma',
    image: courses03,
    progress: 100,
    lectures: 42,
    completed: 42,
  },
  {
    title: 'Полная веб-разработка на Python',
    image: courses05,
    progress: 60,
    lectures: 28,
    completed: 12,
  },
  {
    title: 'Мастер-класс по цифровому маркетингу',
    image: courses01,
    progress: 40,
    lectures: 32,
    completed: 18,
  },
  {
    title: 'Мастер-класс по графическому дизайну',
    image: courses02,
    progress: 90,
    lectures: 16,
    completed: 14,
  },
];
