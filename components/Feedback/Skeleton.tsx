import s from './Feedback.module.css';
import { AppleIcon } from '@/components';
interface SkeletonProps {
  width?: string | number;
  height?: string | number;
}

const Skeleton = ({ width = '90%', height = '80%' }: SkeletonProps) => (
  <div
    className={`${s.skeleton} flex justify-center items-center mx-auto mt-2`}
    style={{ width, height }}
  >
    <AppleIcon width={40} height={45} loading={true} />
  </div>
);

export default Skeleton;
