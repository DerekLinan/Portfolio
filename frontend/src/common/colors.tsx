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
  primary: '#0657a3',
  primaryAlt: '#0084ff',
  secondary: '#095e5e',
  secondaryAlt: '#049b9b',
  accent: '#728d94',
  accentAlt: '#9dbfc7',
  fg: 'black',
  bg: 'white',
};

export const darkTheme: Theme = {
  primary: '#3094e6',
  primaryAlt: '#005fad',
  secondary: '#7476e2',
  secondaryAlt: '#3533a7',
  accent: '#ddc95a',
  accentAlt: '#c49642',
  fg: 'white',
  bg: 'black',
};
