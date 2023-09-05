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
      credentialURL: new URL(
        'https://www.coursera.org/account/accomplishments/certificate/DLBUPB72KUXR',
      ),
    },
    {
      name: 'Hands-on Introduction to Linux Commands and Shell Scripting',
      date: new Date(2023, 7, 27),
      company: 'IBM',
      companyImage: 'ibm-logo.svg',
      credentialID: 'LM4LBYDAZNL7',
      credentialURL: new URL(
        'https://www.coursera.org/account/accomplishments/certificate/LM4LBYDAZNL7',
      ),
    },
  ],
};
