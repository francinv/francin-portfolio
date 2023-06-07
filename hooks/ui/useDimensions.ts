'use client';

import { useEffect, useState } from 'react';

const useDimensions = () => {
  const [width, setWidth] = useState(0);

  const onWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      window.addEventListener('resize', onWindowResize);
      return () => window.removeEventListener('resize', onWindowResize);
    }
  }, []);

  return {
    isSmallScreen: width < 768,
    isMediumScreen: width >= 768 && width < 1024,
    isLargeScreen: width >= 1024,
  };
};

export default useDimensions;
