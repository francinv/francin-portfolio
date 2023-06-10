'use client';

import { createContext, useEffect, useState } from 'react';
import { AppState, BaseContainerProps } from '@/types';
import Modal from 'react-modal';

export const AppContext = createContext<AppState>({
  isSmallScreen: false,
  isAppLoading: false,
});

const AppProvider = ({ children }: BaseContainerProps) => {
  const [width, setWidth] = useState(0);
  const [isAppLoading, setIsAppLoading] = useState(true);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  const onAppLoad = () => {
    const timeoutId = setTimeout(() => {
      setIsAppLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (isAppLoading && width === 0) {
      onAppLoad();
    }

    if (!isAppLoading) Modal.setAppElement('#modal_root');
  }, [isAppLoading, width]);

  return (
    <AppContext.Provider value={{ isSmallScreen: width < 768, isAppLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
