'use client';

import { useDate, useDimensions } from '@/hooks';
import Desktop from './Desktop';
import { toDateString, toTimeString } from '@/util';
import Mobile from './Mobile';

export interface HeaderProps {
  dateString: string;
  isClient: boolean;
}

const Header = () => {
  const { isSmallScreen } = useDimensions();
  const { date, isClient } = useDate();

  return isSmallScreen ? (
    <Mobile dateString={toTimeString(date)} isClient={isClient} />
  ) : (
    <Desktop dateString={toDateString(date)} isClient={isClient} />
  );
};

export default Header;
