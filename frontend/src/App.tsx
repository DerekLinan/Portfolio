import { createContext, useEffect, useState } from 'react';
import { useViewMode, ViewMode } from './hooks/useViewMode';
import { ProjectsSection } from './components/sections/Projects/ProjectsSection';
import { BioSection } from './components/sections/Bio/BioSection';
import { EducationSection } from './components/sections/Education/EducationSection';
import { ContactSection } from './components/sections/Contact';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from './common/colors';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer';

function App() {
  const GlobalContext = createContext(ViewMode.Desktop);
  const viewMode = useViewMode();
  const [theme, setTheme] = useState(
    window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? darkTheme : defaultTheme,
  );

  function ToggleTheme(): void {
    setTheme(prevTheme => (prevTheme === defaultTheme ? darkTheme : defaultTheme));
  }

  useEffect(() => {
    document.body.style.backgroundColor = theme.bg;
  }, [theme]);

  return (
    <GlobalContext.Provider value={viewMode}>
      <ThemeProvider theme={theme}>
        <Navbar isLightMode={theme == defaultTheme} toggleTheme={ToggleTheme} />
        <BioSection />
        <EducationSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
        <Footer />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
