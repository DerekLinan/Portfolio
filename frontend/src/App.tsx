import { createContext, useState } from 'react';
import { ProjectsSection } from './components/sections/Projects';
import { SplashSection } from './components/sections/Splash';
import { useViewMode, ViewMode } from './hooks/useViewMode';
import { ContactSection } from './components/sections/Contact';
import { BioSection } from './components/sections/Bio';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from './common/colors';

function App() {
  const GlobalContext = createContext(ViewMode.Desktop);
  const viewMode = useViewMode();
  const [theme, setTheme] = useState(defaultTheme);

  function ToggleTheme(): void {
    setTheme(prevTheme => (prevTheme === defaultTheme ? darkTheme : defaultTheme));
  }

  return (
    <GlobalContext.Provider value={viewMode}>
      <button onClick={ToggleTheme}>Toggle Theme</button>
      <ThemeProvider theme={theme}>
        <SplashSection />
        <BioSection />
        <ProjectsSection />
        <ContactSection />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
