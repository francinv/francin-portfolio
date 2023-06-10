import { TypographyProps } from '@/types';

const H6 = ({ children, className = '', font = 'font-tertiary' }: TypographyProps) => (
  <h6 className={`text-md font-medium ${font} ${className}`}>{children}</h6>
);

export default H6;
