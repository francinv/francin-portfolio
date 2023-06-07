import { HeaderProps } from '.';
import { P } from '@/components';

const Mobile = ({ isClient, dateString }: HeaderProps) => (
  <header className="px-4 py-2 flex flex-row">
    {isClient && <P weight="medium">{dateString}</P>}
  </header>
);

export default Mobile;
