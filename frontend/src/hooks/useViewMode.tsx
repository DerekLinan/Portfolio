import { useEffect, useState } from 'react';
import { Constants } from '../common/constants';

export enum ViewMode {
  Mobile,
  Tablet,
  Desktop,
  Quad,
}

function CalculateViewMode(windowWidth: number): ViewMode {
  let viewMode: ViewMode;
  if (windowWidth <= Constants.viewBreakpoints.MOBILE) {
    viewMode = ViewMode.Mobile;
  } else if (windowWidth <= Constants.viewBreakpoints.TABLET) {
    viewMode = ViewMode.Tablet;
  } else if (windowWidth <= Constants.viewBreakpoints.DESKTOP) {
    viewMode = ViewMode.Desktop;
  } else {
    viewMode = ViewMode.Quad;
  }

  return viewMode;
}

export const useViewMode = (): ViewMode => {
  const [viewMode, setViewMode] = useState({} as ViewMode);

  useEffect(() => {
    function handleResize() {
      setViewMode(CalculateViewMode(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return viewMode;
};
