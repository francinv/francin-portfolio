import { ChangeEvent, ComponentProps } from 'react';

export interface InputProps<K> {
  name: string;
  onChange: (e: ChangeEvent<K>) => void;
  value: string;
  label?: string;
  type?: ComponentProps<'input'>['type'];
}
