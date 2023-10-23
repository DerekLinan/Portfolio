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
  Framer = 'Framer Motion',
}

export const TagInfo: { [key in Tags]: TagDescription } = {
  [Tags.JS]: {
    description:
      '(JS) is a lightweight interpreted programming language with first-class functions.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
  },
  [Tags.TS]: {
    description:
      '(TS) is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: 'https://www.typescriptlang.org/',
  },
  [Tags.React]: {
    description:
      'is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.',
    link: 'https://react.dev/',
  },
  [Tags.Next]: {
    description: 'is a React framework for building full-stack web applications.',
    link: 'https://nextjs.org/',
  },
  [Tags.Nest]: {
    description:
      'is a framework for building efficient, scalable Node.js server-side applications.',
    link: 'https://nestjs.com/',
  },
  [Tags.Chai]: {
    description:
      'is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.',
    link: 'https://www.chaijs.com/',
  },
  [Tags.Mocha]: {
    description:
      'is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.',
    link: 'https://mochajs.org/',
  },
  [Tags.Styled]: {
    description: 'allow you to write actual CSS code to style your components.',
    link: 'https://styled-components.com/',
  },
  [Tags.Bootstrap]: {
    description:
      'is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.',
    link: 'https://getbootstrap.com/',
  },
  [Tags.HookForms]: {
    description:
      'is a tiny library without any dependencies. Performance Minimizes the number of re-renders, minimizes validate computation, and faster mounting.',
    link: 'https://react-hook-form.com/',
  },
  [Tags.Yup]: {
    description: 'is a schema builder for runtime value parsing and validation.',
    link: 'https://www.npmjs.com/package/yup',
  },
  [Tags.Swagger]: {
    description: 'simplifies API development for users, teams, and enterprises.',
    link: 'https://swagger.io/',
  },
  [Tags.TypeORM]: {
    description:
      'is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript',
    link: 'https://typeorm.io/',
  },
  [Tags.PostgreSQL]: {
    description:
      'is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
    link: 'https://www.postgresql.org/',
  },
  [Tags.Tailwind]: {
    description: 'is a utility-first CSS framework to build any design, directly in your markup.',
    link: 'https://tailwindcss.com/',
  },
  [Tags.Unity]: {
    description: 'is a platform for creating games, movies, and realtime interactive experiences.',
    link: 'https://unity.com/',
  },
  [Tags.CSharp]: {
    description:
      'is a general-purpose high-level programming language supporting multiple paradigms.',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
  },
  [Tags.Webpack]: {
    description: 'is a static module bundler for modern JavaScript applications.',
    link: 'https://webpack.js.org/',
  },
  [Tags.Framer]: {
    description: 'is a production-ready motion library for React.',
    link: 'https://www.framer.com/motion/',
  },
};

export type TagDescription = {
  description: string;
  link: string;
};
