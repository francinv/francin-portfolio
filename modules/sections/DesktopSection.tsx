import {
  Card,
  DocumentIcon,
  FinderIcon,
  FlexContainer,
  GithubIcon,
  IconButton,
  LinkedInIcon,
  MailIcon,
  TerminalIcon,
} from '@/components';
import { Language, Statistics } from '@/modules';
import React from 'react';
import { SectionProps } from './types';

const DesktopSection = ({
  handleGoToLinkedIn,
  handleGoToGithub,
  handleOpenOverlay,
}: SectionProps) => {
  return (
    <section className="h-full grid-rows-2">
      <FlexContainer.Row justify="end">
        <IconButton icon={<GithubIcon.Desktop />} onClick={handleGoToGithub} label={'GitHub'} />
        <IconButton
          icon={<LinkedInIcon.Desktop />}
          onClick={handleGoToLinkedIn}
          label={'LinkedIn'}
          className="ml-8"
        />
      </FlexContainer.Row>
      <div className="grid grid-cols-1 h-full items-center lg:grid-cols-2">
        <div className="flex flex-row justify-center lg:justify-start">
          <IconButton
            icon={<DocumentIcon.Desktop />}
            onClick={() => handleOpenOverlay('cv')}
            label={'My CV'}
          />
          <IconButton
            icon={<FinderIcon.Desktop />}
            onClick={() => handleOpenOverlay('projects')}
            label={'My projects'}
            className="ml-4"
          />
          <IconButton
            icon={<MailIcon.Desktop />}
            onClick={() => handleOpenOverlay('mail')}
            label={'Contact me'}
            className="ml-4"
          />
          <IconButton
            icon={<TerminalIcon />}
            onClick={() => handleOpenOverlay('terminal')}
            label={'Terminal'}
            className="ml-4"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card title="Github Statistics">
            <Statistics />
          </Card>
          <Card title="Most used languages">
            <Language />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DesktopSection;
