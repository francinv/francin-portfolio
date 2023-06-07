import { ModalToolbarProps } from './index';
import { ReactNode } from 'react';
import { FlexContainer, H3, P } from '@/components';
import { useDate } from '@/hooks';
import { toTimeString } from '@/util';

interface MobileProps extends ModalToolbarProps {
  leftContent: ReactNode;
  bgColor?: string;
  appBarColor?: string;
}

const Mobile = ({
  leftContent,
  rightContent,
  title,
  appBarColor = 'bg-gray-100',
  bgColor = 'bg-gray-100',
  height = 92,
}: MobileProps) => {
  const { isClient, date } = useDate();

  return (
    <FlexContainer.Column
      className={`sticky top-0 left-0 ${appBarColor}`}
      style={{ height }}
      items="start"
      justify="between"
    >
      <FlexContainer.Row className="px-4 py-2">
        {isClient && <P weight="medium">{toTimeString(date)}</P>}
      </FlexContainer.Row>
      <FlexContainer.Row justify="between" className={`pt-3 pb-2 py-2 px-4 ${bgColor} w-full`}>
        {leftContent}
        <FlexContainer.Row className="flex-grow">
          <H3 weight="normal">{title}</H3>
        </FlexContainer.Row>
        {rightContent}
      </FlexContainer.Row>
    </FlexContainer.Column>
  );
};

export default Mobile;
