import { IconProps } from '@/types';

const StarIcon = ({ className = '' }: IconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.9999 22.1875L7.28492 26.2438L8.75867 17.6525L2.50867 11.5688L11.1337 10.3188L14.9912 2.5025L18.8487 10.3188L27.4737 11.5688L21.2237 17.6525L22.6974 26.2438L14.9999 22.1875Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StarIcon;
