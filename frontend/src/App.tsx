import { createContext, useEffect, useState } from 'react';
import { useViewMode, ViewMode } from './hooks/useViewMode';
import { ProjectsSection } from './components/sections/Projects';
import { SplashSection } from './components/sections/Splash';
import { BioSection } from './components/sections/Bio';
import { ContactSection } from './components/sections/Contact';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from './common/colors';
import { Navbar } from './components/Navbar';

function App() {
  const GlobalContext = createContext(ViewMode.Desktop);
  const viewMode = useViewMode();
  const [theme, setTheme] = useState(defaultTheme);

  function ToggleTheme(): void {
    setTheme(prevTheme => (prevTheme === defaultTheme ? darkTheme : defaultTheme));
  }

  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
  }, [theme]);

  return (
    <GlobalContext.Provider value={viewMode}>
      <button onClick={ToggleTheme}>Toggle Theme</button>
      <ThemeProvider theme={theme}>
        <Navbar />
        <SplashSection />
        <BioSection />
        <ProjectsSection />
        <ContactSection />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
