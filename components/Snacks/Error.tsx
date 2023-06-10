import { SnackProps } from '@/types';
import { P } from '@/components';
import s from './Snacks.module.css';

const Error = ({ isVisible, message }: SnackProps) =>
  isVisible ? (
    <div className={`bg-red-100 rounded-xl p-4 mt-4 ${s.shake}`}>
      <P className="text-white-1000 my-auto" weight="bold">
        ⚠️ {message}
      </P>
    </div>
  ) : null;

export default Error;
