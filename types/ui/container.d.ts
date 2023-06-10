import { ComponentProps, CSSProperties, ReactNode } from 'react';

export interface BaseContainerProps {
  children: ReactNode;
}

export interface ContainerProps extends BaseContainerProps {
  justify?: 'center' | 'between' | 'end' | 'start';
  items?: 'center' | 'end' | 'start';
  className?: ComponentProps<'div'>['className'];
  style?: CSSProperties;
}
