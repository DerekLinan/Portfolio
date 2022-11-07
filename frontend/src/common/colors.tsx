export type Theme = {
  primary: string;
  primaryAlt: string;
  secondary: string;
  secondaryAlt: string;
  accent: string;
  accentAlt: string;
  fg: string;
  bg: string;
};

export const defaultTheme: Theme = {
  primary: 'blue',
  primaryAlt: '',
  secondary: '',
  secondaryAlt: '',
  accent: '',
  accentAlt: '',
  fg: 'black',
  bg: 'white',
};

export const darkTheme: Theme = {
  primary: 'blue',
  primaryAlt: '',
  secondary: '',
  secondaryAlt: '',
  accent: '',
  accentAlt: '',
  fg: 'white',
  bg: 'black',
};
