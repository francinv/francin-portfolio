import { ViewProps } from './types';
import Link from 'next/link';
import { ChevronRightIcon, FinderIcon, FlexContainer, P } from '@/components';

const MobileWindow = ({ projects }: ViewProps) => (
  <>
    <FlexContainer.Column className="mt-4 w-full">
      {projects?.map((project, idx) => (
        <Link
          className="flex flex-row items-center w-full"
          key={`${idx}+${project.name}`}
          style={{ height: 64 }}
          href={project.projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          <FinderIcon.Desktop height={50} width={50} className="mx-0" />
          <FlexContainer.Row className="ml-4 border-b w-full h-full" justify="between">
            <FlexContainer.Column justify="center" items="start">
              <P>{project.name}</P>
              <p className="text-xs text-gray-400 font-primary">{project.languages.join(', ')}</p>
            </FlexContainer.Column>
            <ChevronRightIcon />
          </FlexContainer.Row>
        </Link>
      ))}
    </FlexContainer.Column>
  </>
);

export default MobileWindow;
