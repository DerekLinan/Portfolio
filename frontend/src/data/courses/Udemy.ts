import { Course } from './types';

export type UdemyCourses = {
  courses: UdemyCourse[];
};

export type UdemyCourse = Course & {
  id: number;
  courseURL: URL;
};

export const UDEMYCOURSES: UdemyCourses = {
  courses: [
    {
      id: 1,
      name: 'Unity Game Development: Make Professional 3D Games',
      date: new Date(2017, 5),
      courseURL: new URL(
        'https://www.udemy.com/course/unity-game-development-make-professional-3d-games/',
      ),
    },
    {
      id: 2,
      name: 'The Ultimate Guide to Game Development with Unity (Official)',
      date: new Date(2018, 6),
      courseURL: new URL(
        'https://www.udemy.com/course/the-ultimate-guide-to-game-development-with-unity/',
      ),
    },
    {
      id: 3,
      name: 'Mathematics for Computer Games Development using Unity',
      date: new Date(2019, 8),
      courseURL: new URL('https://www.udemy.com/course/games_mathematics/'),
    },
    {
      id: 4,
      name: 'Design Patterns for Game Programming',
      date: new Date(2019, 11),
      courseURL: new URL('https://www.udemy.com/course/design-patterns-for-game-programming/'),
    },
    {
      id: 5,
      name: 'The Complete Web Developer Course 3.0',
      date: new Date(2022, 3),
      courseURL: new URL('https://www.udemy.com/course/the-complete-web-developer-course-2/'),
    },
    {
      id: 6,
      name: 'JavaScript: Understanding the Weird Parts',
      date: new Date(2023, 9),
      courseURL: new URL('https://www.udemy.com/course/understand-javascript/'),
    },
  ],
};
