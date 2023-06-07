import { ComponentProps, ReactNode } from 'react';

export interface TypographyProps {
  children: ReactNode;
  className?: ComponentProps<'p'>['className'];
  font?: 'font-primary' | 'font-secondary' | 'font-tertiary';
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  color?: 'text-black-1000' | 'text-white-1000';
}
