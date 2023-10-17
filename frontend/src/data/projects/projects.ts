export type Project = {
  name: string;
  brief: string;
  imagefile: string | string[];
  tags: Tags[];
  description?: string;
  liveSiteURL?: string | URL;
  codeURL?: URL;
  unavailableReason?: string;
};

export enum Tags {
  JS = 'Javascript',
  TS = 'Typescript',
  React = 'ReactJS',
  Next = 'NextJS',
  Nest = 'NestJS',
  Chai = 'Chai',
  Mocha = 'Mocha',
  Styled = 'Styled Components',
  Bootstrap = 'Bootstrap',
  HookForms = 'React Hook Forms',
  Yup = 'Yup',
  Swagger = 'Swagger',
  TypeORM = 'TypeORM',
  PostgreSQL = 'PostgreSQL',
  Tailwind = 'Tailwind',
  Unity = 'Unity',
  CSharp = 'C#',
  Webpack = 'Webpack',
}

export const ALLPROJECTS: Project[] = [
  {
    name: 'Free Youtube Downloader',
    brief: 'A browser extension to easily and quickly download youtube videos.',
    imagefile: ['fyd-2.png', 'fyd-1.png'],
    tags: [Tags.JS, Tags.Webpack],
    description: '',
    liveSiteURL: 'In Development',
    codeURL: new URL('https://github.com/DerekLinan/free-youtube-downloader/tree/main'),
  },
  {
    name: 'Remote Games',
    brief:
      'Remote games is a hobby website designed to host the various games I make as they are developed.',
    imagefile: 'jeoparty.png',
    tags: [Tags.TS, Tags.React, Tags.Next, Tags.Tailwind],
    description: '',
    liveSiteURL: new URL('https://remote-games.vercel.app/'),
    codeURL: new URL('https://github.com/DerekLinan/remote-games'),
  },
  {
    name: 'Crop Management System',
    brief: `Medium-sized full-stack application built with a team of 5 developers. It acts as the business's centralized hub for managing employees, farms, customers, etc.`,
    imagefile: 'cms.ico',
    tags: [
      Tags.TS,
      Tags.React,
      Tags.Styled,
      Tags.Nest,
      Tags.Mocha,
      Tags.Chai,
      Tags.Bootstrap,
      Tags.HookForms,
      Tags.Yup,
      Tags.Swagger,
      Tags.PostgreSQL,
      Tags.TypeORM,
    ],
    description: `Medium-sized full-stack application built with a team of 5 developers. It acts as the business's centralized hub for managing employees, farms, customers, etc.`,
    unavailableReason: `Private company's project`,
  },
  {
    name: 'Portfolio',
    brief: 'My portfolio! Thanks for checking it out 👍',
    imagefile: 'portfolio.png',
    tags: [Tags.TS, Tags.React, Tags.Styled],
    description: '',
    codeURL: new URL('https://github.com/DerekLinan/Portfolio'),
  },
];
