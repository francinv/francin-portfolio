"use client"

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
} from "@/components"
import { useDimensions, useHomeHandlers } from "@/hooks"
import {
  CVWindow,
  DesktopSection,
  Language,
  MailWindow,
  MobileSection,
  ProjectsWindow,
  Statistics,
  TerminalWindow,
} from "@/modules"
import React from "react"
import Modal from "react-modal"

Modal.setAppElement("#modal_root")
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
  } = useHomeHandlers()
  const { isSmallScreen } = useDimensions()

  return (
    <main className="py-2 px-4 h-full md:px-8">
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
        <CVWindow isOpen={isCVOpen} onClose={() => handleCloseOverlay("cv")} />
        <ProjectsWindow
          isOpen={isProjectsOpen}
          onClose={() => handleCloseOverlay("projects")}
        />
        <TerminalWindow
          isOpen={isTerminalOpen}
          onClose={() => handleCloseOverlay("terminal")}
        />
        <MailWindow isOpen={isMailOpen} onClose={() => handleCloseOverlay("mail")} />
      </section>
    </main>
  )
}
