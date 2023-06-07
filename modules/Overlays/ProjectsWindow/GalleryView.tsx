import { ViewProps } from './types';
import { useState } from 'react';
import Image from 'next/image';
import { FinderIcon, FlexContainer, H5, ImageIcon, P } from '@/components';
import Link from 'next/link';

const GalleryView = ({ projects }: ViewProps) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const isSelected = (project) => selectedProject === project;
  const handleProjectClick = (project) => setSelectedProject(project);

  const InformationGroup = ({ title, content }) => (
    <FlexContainer.Row
      className="border-b border-gray-500 py-4 font-primary w-full sm:flex-col sm:items-start sm:ml-2"
      justify="between"
    >
      <P color="text-gray-400">{title}</P>
      <P className="ml-4 sm:ml-0">{content}</P>
    </FlexContainer.Row>
  );

  return (
    <FlexContainer.Row className="h-full">
      <FlexContainer.Column className="w-3/4 h-full" justify="between">
        <div className="flex items-center h-4/5">
          <Link href={selectedProject.projectUrl} target="_blank" rel="noreferrer">
            {selectedProject.imageUrl ? (
              <Image
                src={selectedProject.imageUrl}
                alt="Banner image for project"
                width={650}
                height={350}
              />
            ) : (
              <ImageIcon />
            )}
          </Link>
        </div>
        <div
          className="overflow-x-scroll overflow-y-hidden px-1 pb-1 w-full whitespace-nowrap"
          style={{ height: 70 }}
        >
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => handleProjectClick(project)}
              className="px-2 py-1 aria-pressed:bg-gray-200 rounded-lg"
              aria-pressed={isSelected(project)}
            >
              <FinderIcon.Desktop />
            </button>
          ))}
        </div>
      </FlexContainer.Column>
      <FlexContainer.Column
        className="w-1/4 border-black border-l px-4 pt-14 h-full"
        justify="start"
      >
        <FlexContainer.Row>
          <FinderIcon.Desktop className="mr-4" width={70} height={70} />
          <H5>{selectedProject.name}</H5>
        </FlexContainer.Row>
        <H5 className="mt-11 mb-4 mr-auto">Information</H5>

        <InformationGroup title="Issues:" content={selectedProject.issuesTotalCount} />

        <InformationGroup title="Pull requests:" content={selectedProject.pullRequestsTotalCount} />
        <InformationGroup title="Deployed status:" content={selectedProject.deploymentState} />
        <InformationGroup title="Languages:" content={selectedProject.languages.join(', ')} />
        <InformationGroup title="Description:" content={selectedProject.description} />
      </FlexContainer.Column>
    </FlexContainer.Row>
  );
};

export default GalleryView;
