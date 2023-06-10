import { H3, ModalToolbar, SendIcon } from '@/components';
import { useState } from 'react';
import { useAppContext } from '@/hooks';

interface MailToolbarProps {
  isFormValid: boolean;
  handleSubmit: () => Promise<void>;
  onClose: () => void;
  isLoading: boolean;
}

const MailToolbar = ({ isFormValid, handleSubmit, onClose, isLoading }: MailToolbarProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isSmallScreen } = useAppContext();

  return {
    isFullscreen,
    jsx: isSmallScreen ? (
      <ModalToolbar.Mobile
        leftContent={
          <button onClick={onClose}>
            <H3 weight="normal" className="text-blue-200">
              Cancel
            </H3>
          </button>
        }
        onClose={onClose}
        bgColor="bg-gray-600"
      />
    ) : (
      <ModalToolbar.Desktop
        onClose={onClose}
        onFullscreen={() => setIsFullscreen(!isFullscreen)}
        rightContent={
          <button
            disabled={!isFormValid || isLoading}
            className="rounded-lg hover:bg-gray-200 transition-colors px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
          >
            <SendIcon />
          </button>
        }
      />
    ),
  };
};

export default MailToolbar;
