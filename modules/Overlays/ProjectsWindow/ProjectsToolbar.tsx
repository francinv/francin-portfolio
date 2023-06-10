import { ProjectsView } from '@/lib';
import {
  ChevronLeftIcon,
  FlexContainer,
  GalleryIcon,
  IconButton,
  ModalToolbar,
  SymbolIcon,
} from '@/components';
import React, { useState } from 'react';
import { useAppContext } from '@/hooks';

interface ProjectsToolbarProps {
  isGalleryView: boolean;
  setSelectedView: (view: ProjectsView) => void;
  onClose: () => void;
}

const ProjectsToolbar = ({ isGalleryView, setSelectedView, onClose }: ProjectsToolbarProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isSmallScreen } = useAppContext();

  const RightContent = (
    <FlexContainer.Row>
      <FlexContainer.Row className="hover:bg-gray-200 transition-colors rounded-lg">
        <button
          className="rounded-lg aria-pressed:bg-gray-200"
          aria-pressed={isGalleryView}
          onClick={() => setSelectedView(ProjectsView.Gallery)}
        >
          <GalleryIcon />
        </button>
        <button
          className="rounded-lg aria-pressed:bg-gray-200"
          aria-pressed={!isGalleryView}
          onClick={() => setSelectedView(ProjectsView.Symbol)}
        >
          <SymbolIcon />
        </button>
      </FlexContainer.Row>
    </FlexContainer.Row>
  );
  const LeftContent = <IconButton icon={<ChevronLeftIcon />} onClick={onClose} />;

  return {
    isFullscreen,
    jsx: isSmallScreen ? (
      <ModalToolbar.Mobile
        leftContent={LeftContent}
        onClose={onClose}
        title="Projects"
        rightContent={<div />}
        bgColor="bg-black-1000"
      />
    ) : (
      <ModalToolbar.Desktop
        onFullscreen={() => setIsFullscreen(!isFullscreen)}
        onClose={onClose}
        rightContent={RightContent}
        title="My projects"
      />
    ),
  };
};

export default ProjectsToolbar;
