import { ProjectsView } from '@/lib';
import {
  ChevronLeftIcon,
  FlexContainer,
  GalleryIcon,
  IconButton,
  ModalToolbar,
  SearchIcon,
  SymbolIcon,
} from '@/components';
import React, { ChangeEvent, useState } from 'react';
import { useDimensions } from '@/hooks';

interface ProjectsToolbarProps {
  isGalleryView: boolean;
  setSelectedView: (view: ProjectsView) => void;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  onClose: () => void;
}

const ProjectsToolbar = ({
  isGalleryView,
  setSelectedView,
  handleSearch,
  searchQuery,
  onClose,
}: ProjectsToolbarProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isSmallScreen } = useDimensions();

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
      <FlexContainer.Row
        className="h-9 rounded-lg ml-9 border-gray-300 border pl-2"
        style={{ width: 275 }}
      >
        <SearchIcon />
        <form className="w-full h-full">
          <input
            className="text-white h-full bg-transparent placeholder-gray-300 font-primary text-md w-full outline-none"
            placeholder="Search for project or language"
            onChange={handleSearch}
            value={searchQuery}
          />
        </form>
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
        appBarColor="bg-black-1000"
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
