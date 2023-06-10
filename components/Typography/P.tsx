import { TypographyProps } from '@/types';

const P = ({
  children,
  className = '',
  font = 'font-primary',
  color = 'text-white-1000',
  weight = 'normal',
}: TypographyProps) => (
  <p className={`text-base ${color} ${font} font-${weight} ${className}`}>{children}</p>
);

export default P;
