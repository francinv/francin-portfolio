import { ModalProps } from '@/types';
import {
  ChevronRightIcon,
  FinderIcon,
  FlexContainer,
  ModalWrapper,
  P,
  SearchIcon,
} from '@/components';
import React, { useState } from 'react';
import { projects, ProjectsView } from '@/lib';
import GalleryView from './GalleryView';
import SymbolView from './SymbolView';
import ProjectsToolbar from './ProjectsToolbar';
import { useDimensions } from '@/hooks';
import Link from 'next/link';

const ProjectsWindow = ({ isOpen, onClose }: ModalProps) => {
  const [selectedView, setSelectedView] = useState<ProjectsView>(ProjectsView.Gallery);
  const [searchQuery, setSearchQuery] = useState('');

  const isGalleryView = selectedView === ProjectsView.Gallery;

  const { jsx, isFullscreen } = ProjectsToolbar({
    isGalleryView,
    setSelectedView,
    handleSearch: (e) => setSearchQuery(e.target.value),
    searchQuery,
    onClose,
  });
  const { isSmallScreen } = useDimensions();

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="My projects"
      toolbar={jsx}
      isFullscreen={isFullscreen}
    >
      {isSmallScreen ? (
        <FlexContainer.Column className="bg-black-1000 px-4 overflow-y-scroll" items="center">
          <FlexContainer.Row className="h-9 rounded-lg bg-gray-600 pl-2 mt-4 w-full">
            <SearchIcon />
            <form className="w-full h-full">
              <input
                className="text-white h-full bg-transparent placeholder-gray-300 placeholder-font-light font-primary text-md w-full outline-none"
                placeholder="Search for project or language"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </form>
          </FlexContainer.Row>
          <FlexContainer.Column className="mt-4 w-full">
            {projects.map((project) => (
              <Link
                className="flex flex-row items-center w-full"
                key={project.name}
                style={{ height: 64 }}
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FinderIcon.Desktop height={50} width={50} className="mx-0" />
                <FlexContainer.Row className="ml-4 border-b w-full h-full" justify="between">
                  <FlexContainer.Column justify="center" items="start">
                    <P>{project.name}</P>
                    <p className="text-xs text-gray-400 font-primary">
                      {project.languages.join(', ')}
                    </p>
                  </FlexContainer.Column>
                  <ChevronRightIcon />
                </FlexContainer.Row>
              </Link>
            ))}
          </FlexContainer.Column>
        </FlexContainer.Column>
      ) : (
        <div className="bg-black-300 w-full h-full">
          {isGalleryView ? <GalleryView projects={projects} /> : <SymbolView projects={projects} />}
        </div>
      )}
    </ModalWrapper>
  );
};

export default ProjectsWindow;
