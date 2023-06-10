import { SnackProps } from '@/types';
import { P } from '@/components';
import s from './Snacks.module.css';

const Success = ({ isVisible, message }: SnackProps) =>
  isVisible ? (
    <div className={`bg-green-100 rounded-xl p-4 mt-4 ${s.popup}`}>
      <P className="text-white-1000 my-auto" weight="bold">
        🎉 {message}
      </P>
    </div>
  ) : null;

export default Success;
