'use client';

import { useAppContext, useDate } from '@/hooks';
import Desktop from './Desktop';
import { toDateString } from '@/util';

export interface HeaderProps {
  dateString: string;
  isClient: boolean;
}

const Header = () => {
  const { isSmallScreen } = useAppContext();
  const { date, isClient } = useDate();

  return isSmallScreen ? null : <Desktop dateString={toDateString(date)} isClient={isClient} />;
};

export default Header;
