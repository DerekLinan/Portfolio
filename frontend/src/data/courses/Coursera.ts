import { Course } from './types';

export type CourseraCourses = {
  courses: CourseraCourse[];
};

export type CourseraCourse = Course & {
  company: string;
  companyImage: string;
  credentialID: string;
  credentialURL: URL;
};

export const COURSERACOURSES: CourseraCourses = {
  courses: [
    {
      name: 'Introduction to Software Engineering',
      date: new Date(2023, 7, 18),
      company: 'IBM',
      companyImage: 'ibm-logo.svg',
      credentialID: 'DLBUPB72KUXR',
      credentialURL: new URL('https://coursera.org/share/73ed37f3f91d6ee169e9d7ebb97b486c'),
    },
    {
      name: 'Hands-on Introduction to Linux Commands and Shell Scripting',
      date: new Date(2023, 7, 27),
      company: 'IBM',
      companyImage: 'ibm-logo.svg',
      credentialID: 'LM4LBYDAZNL7',
      credentialURL: new URL('https://coursera.org/share/df8a15cbd7b0ae1b1b9e23b47c6c6124'),
    },
    {
      name: 'Getting Started with Git and GitHub',
      date: new Date(2023, 8, 5),
      company: 'IBM',
      companyImage: 'ibm-logo.svg',
      credentialID: 'YKXJ969J674F',
      credentialURL: new URL('https://coursera.org/share/3f0aeda170a8981f013b42ac45bdb9b7'),
    },
  ],
};
