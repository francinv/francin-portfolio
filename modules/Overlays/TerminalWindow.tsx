import { ModalToolbar, ModalWrapper, P } from '@/components';
import { Pace, WindupChildren } from 'windups';
import { useState } from 'react';
import { ModalProps } from '@/types';
import { AboutMe } from '@/constants';

const Toolbar = ({ onClose }: { onClose: () => void }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return {
    isFullscreen,
    jsx: (
      <ModalToolbar.Desktop
        onClose={onClose}
        onFullscreen={() => setIsFullscreen(!isFullscreen)}
        height="auto"
      />
    ),
  };
};

const TerminalWindow = ({ isOpen, onClose }: ModalProps) => {
  const [startInformation, setStartInformation] = useState(false);
  const { isFullscreen, jsx } = Toolbar({ onClose });

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} toolbar={jsx} isFullscreen={isFullscreen}>
      <div className="p-5">
        <P font="font-secondary">
          francinvincent@Francins-MBP ~ %{' '}
          <WindupChildren onFinished={() => setStartInformation(true)}>
            cat francin.json
          </WindupChildren>
        </P>
        <WindupChildren isPaused={!startInformation} onFinished={() => setStartInformation(false)}>
          <Pace getPace={(char) => (char === ' ' ? 10 : 5)}>
            <P className="ml-0.5" font="font-secondary">
              {'{'}
            </P>
            <div className="ml-3">
              <P font="font-secondary">{`"name": "${AboutMe.name}",`}</P>
              <P font="font-secondary">{`"age": ${AboutMe.age},`}</P>
              <P font="font-secondary">{`"education": "${AboutMe.education}",`}</P>
              <P font="font-secondary">{`"location": "${AboutMe.location}",`}</P>
              <P font="font-secondary">{`"languages": "${AboutMe.languages}",`}</P>
              <P font="font-secondary">{`"frameworks": "${AboutMe.frameworks}",`}</P>
            </div>
            <P className="ml-0.5" font="font-secondary">
              {'}'}
            </P>
          </Pace>
        </WindupChildren>
      </div>
    </ModalWrapper>
  );
};

export default TerminalWindow;
