import {
  Card,
  DocumentIcon,
  FinderIcon,
  FlexContainer,
  GithubIcon,
  H6,
  IconButton,
  LinkedInIcon,
  MailIcon,
  P,
} from '@/components';
import { Language, Statistics } from '@/modules';
import React from 'react';
import { SectionProps } from './types';
import { AboutMe } from '@/constants';

const MobileSection = ({
  handleGoToLinkedIn,
  handleGoToGithub,
  handleOpenOverlay,
}: SectionProps) => {
  return (
    <section className="flex flex-col h-full">
      <FlexContainer.Row justify="start" items="start" className="my-2">
        <IconButton
          icon={<GithubIcon.Mobile />}
          onClick={handleGoToGithub}
          label={'GitHub'}
          labelSize="md"
        />
        <IconButton
          icon={<LinkedInIcon.Mobile />}
          onClick={handleGoToLinkedIn}
          label={'LinkedIn'}
          className="ml-6"
          labelSize="md"
        />
      </FlexContainer.Row>
      <FlexContainer.Column>
        <Card className="w-full h-full flex flex-col justify-center pr-4">
          <FlexContainer.Row justify="between" items="start">
            <H6>Name:</H6>
            <P className="text-sm text-right">{AboutMe.name}</P>
          </FlexContainer.Row>
          <FlexContainer.Row justify="between" items="start">
            <H6>Age:</H6>
            <P className="text-sm text-right">{AboutMe.age}</P>
          </FlexContainer.Row>
          <FlexContainer.Row justify="between" items="start">
            <H6>Location:</H6>
            <P className="text-sm text-right">{AboutMe.location}</P>
          </FlexContainer.Row>
          <FlexContainer.Row justify="between" items="start">
            <H6>Education:</H6>
            <P className="text-sm text-right">{AboutMe.education}</P>
          </FlexContainer.Row>
          <FlexContainer.Row justify="between" items="start">
            <H6>Languages:</H6>
            <P className="text-sm text-right">{AboutMe.languages}</P>
          </FlexContainer.Row>
          <FlexContainer.Row justify="between" items="start">
            <H6>Frameworks:</H6>
            <P className="text-sm text-right">{AboutMe.frameworks}</P>
          </FlexContainer.Row>
        </Card>
        <P className="text-md">About me</P>
      </FlexContainer.Column>
      <div className="grid grid-cols-2 gap-2 my-2">
        <FlexContainer.Column>
          <Card className="w-full h-full flex flex-col justify-center">
            <Statistics />
          </Card>
          <P className="text-md">Statistics</P>
        </FlexContainer.Column>
        <FlexContainer.Column>
          <Card className="w-full h-full flex flex-col justify-center">
            <Language />
          </Card>
          <P className="text-md">Languages</P>
        </FlexContainer.Column>
      </div>

      <FlexContainer.Row className="py-4 rounded-xl bg-white-100">
        <IconButton icon={<DocumentIcon.Mobile />} onClick={() => handleOpenOverlay('cv')} />
        <IconButton
          icon={<FinderIcon.Mobile />}
          onClick={() => handleOpenOverlay('projects')}
          className="ml-8"
        />
        <IconButton
          icon={<MailIcon.Mobile />}
          onClick={() => handleOpenOverlay('mail')}
          className="ml-8"
        />
      </FlexContainer.Row>
    </section>
  );
};

export default MobileSection;
