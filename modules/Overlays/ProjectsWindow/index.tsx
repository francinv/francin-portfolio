import { ModalProps } from '@/types';
import { FlexContainer, ModalWrapper, Spinner } from '@/components';
import React, { useState } from 'react';
import { ProjectsView } from '@/lib';
import GalleryView from './GalleryView';
import SymbolView from './SymbolView';
import ProjectsToolbar from './ProjectsToolbar';
import { useAppContext, useRepos } from '@/hooks';
import MobileWindow from './MobileWindow';

const ProjectsWindow = ({ isOpen, onClose }: ModalProps) => {
  const [selectedView, setSelectedView] = useState<ProjectsView>(ProjectsView.Gallery);

  const isGalleryView = selectedView === ProjectsView.Gallery;

  const { jsx, isFullscreen } = ProjectsToolbar({
    isGalleryView,
    setSelectedView,
    onClose,
  });
  const { isSmallScreen } = useAppContext();
  const { data: projects, isLoading, isSuccess } = useRepos();

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="My projects"
      toolbar={jsx}
      isFullscreen={isFullscreen}
    >
      {isLoading && (
        <div className="w-full h-full justify-center items-center flex">
          <Spinner size={100} message={'👷 Fetching projects from Github'} />
        </div>
      )}
      {isSuccess &&
        projects &&
        (isSmallScreen ? (
          <FlexContainer.Column className="bg-black-1000 px-4 overflow-y-scroll" items="center">
            <MobileWindow projects={projects} />
          </FlexContainer.Column>
        ) : (
          <div className="bg-black-300 w-full h-full">
            {projects &&
              (isGalleryView ? (
                <GalleryView projects={projects} />
              ) : (
                <SymbolView projects={projects} />
              ))}
          </div>
        ))}
    </ModalWrapper>
  );
};

export default ProjectsWindow;
