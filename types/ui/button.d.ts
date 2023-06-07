import { ComponentProps } from 'react';

export interface BaseButtonProps {
  onClick?: () => void;
  label?: string;
  className?: ComponentProps<'button'>['className'];
  type?: ComponentProps<'button'>['type'];
}
