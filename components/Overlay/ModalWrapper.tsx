'use client';

import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import { ModalProps } from '@/types';
import { useAppContext } from '@/hooks';

interface WrapperProps extends ModalProps {
  children: ReactNode;
  isFullscreen?: boolean;
  title?: string;
  toolbar?: ReactNode;
}

const ModalWrapper = ({
  isOpen,
  onClose,
  children,
  toolbar,
  isFullscreen = false,
}: WrapperProps) => {
  const { isSmallScreen } = useAppContext();

  if (!isOpen) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'transparent',
        },
        content: {
          width: isFullscreen || isSmallScreen ? '100%' : '70%',
          height: isFullscreen || isSmallScreen ? '100%' : '70%',
          borderRadius: isFullscreen || isSmallScreen ? 0 : '8px',
          backgroundColor: 'black',
          border: 'none',
          padding: 0,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          position: 'relative',
        },
      }}
    >
      <div className="w-full h-full">
        {toolbar}
        <div
          className="overflow-y-auto w-full"
          style={{
            height: `calc(100% - 54px)`,
          }}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
