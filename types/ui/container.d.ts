import { ComponentProps, CSSProperties, ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  justify?: 'center' | 'between' | 'end' | 'start';
  items?: 'center' | 'end' | 'start';
  className?: ComponentProps<'div'>['className'];
  style?: CSSProperties;
}
