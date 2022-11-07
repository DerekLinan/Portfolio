import { createContext } from 'react';
import './App.css';
import { useViewMode, ViewMode } from './hooks/useViewMode';

function App() {
  const GlobalContext = createContext(ViewMode.Desktop);
  const viewMode = useViewMode();

  return (
    <GlobalContext.Provider value={viewMode}>
      <div></div>
    </GlobalContext.Provider>
  );
}

export default App;
