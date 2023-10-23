import { THEMES } from './constants';

export type Theme = {
  name: string;
  primary: string;
  primaryAlt: string;
  secondary: string;
  secondaryAlt: string;
  accent: string;
  accentAlt: string;
  fg: string;
  bg: string;
  splash: string;
};

export const defaultTheme: Theme = {
  name: THEMES[0],
  primary: '#0763b9',
  primaryAlt: '#128cfd',
  secondary: '#095e5e',
  secondaryAlt: '#049b9b',
  accent: '#c49642',
  accentAlt: '#ddc95a',
  fg: 'black',
  bg: 'white',
  splash: '#fc0',
};

export const darkTheme: Theme = {
  name: THEMES[1],
  primary: '#3094e6',
  primaryAlt: '#005fad',
  secondary: '#7476e2',
  secondaryAlt: '#3533a7',
  accent: '#ddc95a',
  accentAlt: '#c49642',
  fg: 'white',
  bg: 'black',
  splash: '#fc0',
};
