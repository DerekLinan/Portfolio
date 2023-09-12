import { Certification } from './types';

export const CERTIFICATIONS = {
  appDev: {
    id: '146896',
    name: 'Application Developer',
    date: new Date(2022, 9),
    issuer:
      'State of California Department of Industrial Relations Interagency Advisory Committee on Apprenticeship',
    image: 'app-dev-cert.png',
  },
  coursera: [
    {
      id: 'ibm-backend-development',
      name: 'IBM Back-End Development Professional',
      date: new Date(),
      issuer: 'IBM',
      image: '',
      inProgressLink: new URL(
        'https://www.coursera.org/professional-certificates/ibm-backend-development?skipBrowseRedirect=true',
      ),
    },
  ] as Certification[],
};
