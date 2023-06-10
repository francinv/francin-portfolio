import { ContainerProps } from '@/types';

const RowContainer = ({
  children,
  justify = 'center',
  items = 'center',
  className = '',
  style,
}: ContainerProps) => (
  <div className={`flex flex-row justify-${justify} items-${items} ${className}`} style={style}>
    {children}
  </div>
);

export default RowContainer;
