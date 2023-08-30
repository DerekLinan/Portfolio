import { Course } from './types';

export type LinkedInCourses = {
  courses: LinkedInCourse[];
};

export type LinkedInCourse = Course & {
  company: string;
  companyImage: string;
  credentialID: string;
  credentialURL: URL;
};

export const LINKEDINCOURSES: LinkedInCourses = {
  courses: [
    {
      name: 'Introduction to Software Engineering',
      date: new Date(2023, 8),
      company: 'IBM',
      companyImage: 'ibm-logo.png',
      credentialID: 'DLBUPB72KUXR',
      credentialURL: new URL(
        'https://www.coursera.org/account/accomplishments/certificate/DLBUPB72KUXR',
      ),
    },
    {
      name: 'Hands-on Introduction to Linux Commands and Shell Scripting',
      date: new Date(2023, 8),
      company: 'IBM',
      companyImage: 'ibm-logo.png',
      credentialID: 'LM4LBYDAZNL7',
      credentialURL: new URL(
        'https://www.coursera.org/account/accomplishments/certificate/LM4LBYDAZNL7',
      ),
    },
  ],
};
