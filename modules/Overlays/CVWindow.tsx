import { ModalProps } from '@/types';
import {
  DownloadIcon,
  EmailIcon,
  FlexContainer,
  H1,
  H3,
  H4,
  H6,
  IconButton,
  LinkIcon,
  LocationIcon,
  ModalToolbar,
  ModalWrapper,
  PhoneIcon,
  XIcon,
} from '@/components';
import { MyCv } from '@/constants';
import React, { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/hooks';
import { CVIcon } from '@/lib';

const CVIcons = {
  [CVIcon.Phone]: <PhoneIcon />,
  [CVIcon.Email]: <EmailIcon />,
  [CVIcon.Url]: <LinkIcon />,
  [CVIcon.Location]: <LocationIcon />,
};

const Toolbar = ({ onClose }: { onClose: () => void }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { isSmallScreen } = useAppContext();

  const LeftContent = <IconButton icon={<XIcon.Mobile />} onClick={onClose} />;
  const RightContent = (
    <Link
      href="/FrancinAnojVincentCV.pdf"
      target="_blank"
      className="rounded-lg transition-colors hover:bg-gray-200 px-2 py-1"
    >
      <DownloadIcon />
    </Link>
  );

  return {
    isFullscreen,
    jsx: isSmallScreen ? (
      <ModalToolbar.Mobile
        leftContent={LeftContent}
        onClose={onClose}
        rightContent={RightContent}
        title="CV"
      />
    ) : (
      <ModalToolbar.Desktop
        onFullscreen={() => setIsFullscreen(!isFullscreen)}
        onClose={onClose}
        title="CV"
        rightContent={RightContent}
      />
    ),
  };
};

const CVWindow = ({ isOpen, onClose }: ModalProps) => {
  const { isFullscreen, jsx } = Toolbar({ onClose });

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="CV"
      toolbar={jsx}
      isFullscreen={isFullscreen}
    >
      <div className="md:py-5 md:px-20">
        <div className="bg-white-1000 p-11">
          <H1>{MyCv.name}</H1>
          <H4 className="text-blue-500 font-normal" font="font-tertiary">
            {MyCv.title}
          </H4>
          <FlexContainer.Row justify="start" className="flex-wrap">
            {MyCv.contact_info.map((info) => (
              <FlexContainer.Row className="mr-2" key={info.text}>
                {CVIcons[info.icon]}
                <Link
                  href={info.link}
                  target="_blank"
                  className="text-gray-400 text-sm font-tertiary"
                >
                  {info.text}
                </Link>
              </FlexContainer.Row>
            ))}
          </FlexContainer.Row>
          <div className="grid gap-4 grid-cols-1 mt-5 md:grid-cols-2">
            <div>
              <H6 className="text-gray-400">EXPERIENCE</H6>
              {MyCv.experiences.map((exp) => (
                <div key={exp.company} className="mt-3">
                  <H3 font="font-tertiary" className="text-black-1000 font-normal">
                    {exp.title}
                  </H3>
                  <FlexContainer.Row className="flex-wrap" justify="start">
                    <p className="text-xs font-extralight text-blue-500 min-w-max">{exp.company}</p>
                    <p className="text-xs font-light text-gray-400 ml-2 min-w-max">{`${exp.from} ${
                      exp.to ? ` - ${exp.to}` : ''
                    }`}</p>
                    <p className="text-xs font-light text-gray-400 ml-2 min-w-max">
                      {exp.location}
                    </p>
                  </FlexContainer.Row>
                  <p className="text-black-1000 text-md font-tertiary font-normal">
                    {exp.description}
                  </p>
                  <ul>
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-black-1000 text-md font-tertiary font-normal list-disc ml-6"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <H6 className="text-gray-400 mt-4">EDUCATION</H6>
              {MyCv.education.map((edu) => (
                <div key={edu.title} className="mt-3">
                  <H3 font="font-tertiary" className="text-black-1000 font-normal">
                    {edu.title}
                  </H3>
                  <p className="text-md font-extralight text-blue-500 min-w-max">{edu.school}</p>
                  <p className="text-xs font-light text-gray-400 min-w-max">
                    {edu.from + ' - ' + edu.to}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <H6 className="text-gray-400">SUMMARY</H6>
              <p className="text-black-1000 text-md font-tertiary font-normal mt-3">
                {MyCv.summary}
              </p>
              <H6 className="text-gray-400 mt-4">SKILLS</H6>
              {MyCv.skills.map((group, idx) => (
                <div
                  key={idx}
                  className="mt-6 grid gap-2"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(125px, 1fr))',
                  }}
                >
                  {group.map((skill) => (
                    <div key={skill} className="border-b-2 border-gray-200 text-center">
                      <p className="text-black-1000 text-md font-tertiary font-bold pb-1">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
              <H6 className="text-gray-400 mt-4">LANGUAGES</H6>
              {MyCv.languages.map((lang) => (
                <FlexContainer.Row className="mt-2" justify="between" key={lang.language}>
                  <p className="text-black-1000 text-md font-tertiary">{lang.language}</p>
                  <p className="text-gray-400 text-md font-tertiary">{lang.proficiency}</p>
                </FlexContainer.Row>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CVWindow;
