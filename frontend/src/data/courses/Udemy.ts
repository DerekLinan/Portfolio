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
      name: 'JavaScript: Understanding the Weird Parts',
      date: new Date(2023, 9),
      courseURL: new URL('https://www.udemy.com/course/understand-javascript/'),
    },
  ],
};
