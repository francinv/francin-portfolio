import { FlexContainer, P } from '@/components';

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar = ({ progress, color }: ProgressBarProps) => {
  return (
    <FlexContainer.Row className="w-full" justify="start">
      <div className="h-3 w-2/3 relative md:h-6">
        <div className="h-full w-full bg-gray-800 rounded-xl absolute top-0 left-0"></div>
        <div
          className="h-full rounded-l-xl absolute top-0 left-0"
          style={{
            width: `${progress}%`,
            minWidth: '1rem', // To prevent the bar from disappearing
            backgroundColor: color,
          }}
        />
      </div>
      <P className="text-gray-400 text-sm ml-1.5 md:text-lg md:ml-3">{progress}%</P>
    </FlexContainer.Row>
  );
};

export default ProgressBar;
