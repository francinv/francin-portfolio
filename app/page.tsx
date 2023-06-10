'use client';

import { useAppContext, useHomeHandlers } from '@/hooks';
import {
  CVWindow,
  DesktopSection,
  MailWindow,
  MobileSection,
  ProjectsWindow,
  TerminalWindow,
} from '@/modules';
import React from 'react';
import { AppLoader, Header } from '@/components';

export default function Home() {
  const {
    handleGoToLinkedIn,
    handleGoToGithub,
    handleCloseOverlay,
    handleOpenOverlay,
    isCVOpen,
    isProjectsOpen,
    isTerminalOpen,
    isMailOpen,
  } = useHomeHandlers();
  const { isSmallScreen, isAppLoading } = useAppContext();

  return isAppLoading ? (
    <AppLoader />
  ) : (
    <>
      <Header />
      <main
        className="py-2 px-4 md:px-8"
        style={{
          height: `calc(100% - ${isSmallScreen ? 0 : 30}px)`,
        }}
      >
        {isSmallScreen ? (
          <MobileSection
            handleGoToGithub={handleGoToGithub}
            handleGoToLinkedIn={handleGoToLinkedIn}
            handleOpenOverlay={handleOpenOverlay}
          />
        ) : (
          <DesktopSection
            handleGoToGithub={handleGoToGithub}
            handleGoToLinkedIn={handleGoToLinkedIn}
            handleOpenOverlay={handleOpenOverlay}
          />
        )}
        <section id="modal_root">
          <CVWindow isOpen={isCVOpen} onClose={() => handleCloseOverlay('cv')} />
          <ProjectsWindow isOpen={isProjectsOpen} onClose={() => handleCloseOverlay('projects')} />
          <TerminalWindow isOpen={isTerminalOpen} onClose={() => handleCloseOverlay('terminal')} />
          <MailWindow isOpen={isMailOpen} onClose={() => handleCloseOverlay('mail')} />
        </section>
      </main>
    </>
  );
}
