import s from './Feedback.module.css';
import { H3 } from '@/components';

interface SpinnerProps {
  size?: number;
  message?: string;
}

const Spinner = ({ size = 50, message }: SpinnerProps) => {
  const blades = Array.from({ length: 12 }, (_, i) => i);
  const baseDelay = 0.083;
  const baseDegree = 30;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className={s.spinner} style={{ fontSize: `${size}px`, width: '1em', height: '1em' }}>
        {blades.map((_, i) => (
          <div
            key={i}
            className={s.blade}
            style={{
              animationDelay: `${baseDelay * i}s`,
              transform: `rotate(${baseDegree * i}deg)`,
            }}
          />
        ))}
      </div>
      <H3 className="mt-4">{message}</H3>
    </div>
  );
};

export default Spinner;
