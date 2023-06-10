'use client';

import { useEffect, useState } from 'react';

const useDate = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDate = () => setDate(new Date());

    const interval = setInterval(updateDate, 1000 * 60);
    return () => clearInterval(interval);
  }, [date]);

  return {
    date,
    isClient,
  };
};

export default useDate;
