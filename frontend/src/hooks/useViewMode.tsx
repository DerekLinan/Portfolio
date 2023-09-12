import { useEffect, useState } from 'react';
import { VIEW_BREAKPOINTS } from '../common/constants';

export enum ViewMode {
  Mobile,
  Tablet,
  Desktop,
  Quad,
}

function CalculateViewMode(windowWidth: number): ViewMode {
  let viewMode: ViewMode;
  if (windowWidth <= VIEW_BREAKPOINTS.MOBILE) {
    viewMode = ViewMode.Mobile;
  } else if (windowWidth <= VIEW_BREAKPOINTS.TABLET) {
    viewMode = ViewMode.Tablet;
  } else if (windowWidth <= VIEW_BREAKPOINTS.DESKTOP) {
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
      const newView = CalculateViewMode(window.innerWidth);
      if (String(viewMode) !== String(newView)) {
        setViewMode(newView);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return viewMode;
};
