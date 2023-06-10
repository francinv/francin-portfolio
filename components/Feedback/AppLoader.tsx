import { AppleIcon } from '@/components';
import s from './Feedback.module.css';

const AppLoader = () => (
  <main className="h-full flex flex-col justify-center items-center bg-black-1000">
    <AppleIcon width={70} height={75} />
    <div className="w-52 h-2 rounded-xl bg-gray-800 mt-10 relative">
      <div className={s.progress_loader} />
    </div>
  </main>
);

export default AppLoader;
