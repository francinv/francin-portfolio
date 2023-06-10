import Image from 'next/image';
import { IconProps } from '@/types';

const Desktop = ({ width = 64, height = 64, className = 'mx-auto' }: IconProps) => (
  <Image
    src={'/icons/Folder.svg'}
    alt={'Icon that symbolizes a folder'}
    width={width}
    height={height}
    className={className}
  />
);

export default Desktop;
