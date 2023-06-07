import { ReactNode } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';

export interface ModalToolbarProps {
  onClose: () => void;
  rightContent?: ReactNode;
  title?: string;

  height?: number;
}

const ModalToolbar = {
  Mobile: Mobile,
  Desktop: Desktop,
};

export default ModalToolbar;
