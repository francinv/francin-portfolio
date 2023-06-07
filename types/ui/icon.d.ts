import { ComponentProps } from 'react';

export interface IconProps {
  width?: number;
  height?: number;
  className?: ComponentProps<'svg'>['className'];
}
