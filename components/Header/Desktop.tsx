import { AppleIcon, FlexContainer, P } from '@/components';
import { NAME } from '@/constants';
import { HeaderProps } from '.';

const Desktop = ({ isClient, dateString }: HeaderProps) => (
  <header className={'bg-black-100 px-2 py-1 flex flex-row items-center justify-between'}>
    <AppleIcon />
    <FlexContainer.Row>
      <P weight="medium">{NAME}</P>
      {isClient && (
        <P className="ml-6" weight="medium">
          {dateString}
        </P>
      )}
    </FlexContainer.Row>
  </header>
);

export default Desktop;
