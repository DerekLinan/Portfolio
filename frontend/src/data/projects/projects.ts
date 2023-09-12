export type Project = {
  name: string;
  brief: string;
  imagefile: string;
  tags: Tags[];
  description?: string;
  liveSiteURL?: URL;
  codeURL?: URL;
  unavailableReason?: string;
};

export enum Tags {
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
}

export const ALLPROJECTS: Project[] = [
  {
    name: 'Remote Games',
    brief:
      'Remote games is a hobby website designed to host the various games I make as they are developed. ',
    imagefile: 'jeoparty.png',
    tags: [Tags.TS, Tags.React, Tags.Next, Tags.Tailwind],
    description: '',
    liveSiteURL: new URL('https://remote-games.vercel.app/'),
    codeURL: new URL('https://github.com/DerekLinan/remote-games'),
  },
  {
    name: 'Crop Management System',
    brief: `Medium-sized full-stack application. It acts as the business's centralized hub for managing employees, farms, customers, etc.`,
    imagefile: '',
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
    description: `Medium-sized full-stack application. It acts as the business's centralized hub for managing employees, farms, customers, etc.`,
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
  {
    name: 'Slap Trap Tap',
    brief:
      'A single and multiplayer card game expected to release on Steam and other platforms in 2025.',
    imagefile: '',
    tags: [Tags.Unity, Tags.CSharp],
    description: '',
    unavailableReason: 'In Alpha',
  },
];
