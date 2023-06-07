import { ContainerProps } from '@/types';

const ColumnContainer = ({
  children,
  justify = 'center',
  items = 'center',
  className = '',
  style,
}: ContainerProps) => (
  <div className={`flex flex-col justify-${justify} items-${items} ${className}`} style={style}>
    {children}
  </div>
);

export default ColumnContainer;
