import { useState, useEffect } from 'react';

//Based on Material UI Breakpoint
const checkBreakpoint = (windowWidth) => {
  if (windowWidth) {
    return windowWidth < 960;
  } else {
    return undefined;
  }
};

const useIsSmallScreen = () => {
  const isWindowClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? checkBreakpoint(window.innerWidth) : undefined
  );

  useEffect(() => {
    const setSize = () => {
      setWindowSize(checkBreakpoint(window.innerWidth));
    };

    if (isWindowClient) {
      window.addEventListener('resize', setSize);
      return () => window.removeEventListener('resize', setSize);
    }
  }, [isWindowClient, setWindowSize]);

  return windowSize;
};

export default useIsSmallScreen;
