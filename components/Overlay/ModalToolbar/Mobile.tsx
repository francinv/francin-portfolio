import { ModalToolbarProps } from './index';
import { ReactNode } from 'react';
import { FlexContainer, H3 } from '@/components';

interface MobileProps extends ModalToolbarProps {
  leftContent: ReactNode;
  bgColor?: string;
}

const Mobile = ({
  leftContent,
  rightContent,
  title,
  bgColor = 'bg-gray-100',
  height = 54,
}: MobileProps) => {
  return (
    <FlexContainer.Column
      className={`sticky top-0 left-0 ${bgColor}`}
      style={{ height }}
      items="start"
      justify="between"
    >
      <FlexContainer.Row justify="between" className={`pt-3 pb-2 py-2 px-4 w-full`}>
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
