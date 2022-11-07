import './App.css';
import { createContext } from 'react';
import { ProjectsSection } from './components/sections/Projects';
import { SplashSection } from './components/sections/Splash';
import { useViewMode, ViewMode } from './hooks/useViewMode';
import { ContactSection } from './components/sections/Contact';
import { BioSection } from './components/sections/Bio';

function App() {
  const GlobalContext = createContext(ViewMode.Desktop);
  const viewMode = useViewMode();

  return (
    <GlobalContext.Provider value={viewMode}>
      <SplashSection />
      <BioSection />
      <ProjectsSection />
      <ContactSection />
    </GlobalContext.Provider>
  );
}

export default App;
