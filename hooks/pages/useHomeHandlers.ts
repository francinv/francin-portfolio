"use client"

import { GITHUB, LINKEDIN } from "@/constants"
import { useState } from "react"
import { OverlayKey, OverlayState } from "@/types"

const useHomeHandlers = () => {
  const [openOverlays, setOpenOverlay] = useState<OverlayState>({
    terminal: false,
    cv: false,
    mail: false,
    projects: false,
  })
  const handleGoToLinkedIn = () => {
    window.open(LINKEDIN)
  }

  const handleGoToGithub = () => {
    window.open(GITHUB)
  }

  const handleOpenOverlay = (key: OverlayKey) => {
    setOpenOverlay({
      ...openOverlays,
      [key]: true,
    })
  }

  const handleCloseOverlay = (key: OverlayKey) => {
    setOpenOverlay({
      ...openOverlays,
      [key]: false,
    })
  }

  return {
    handleGoToLinkedIn,
    handleGoToGithub,
    isCVOpen: openOverlays.cv,
    isMailOpen: openOverlays.mail,
    isProjectsOpen: openOverlays.projects,
    isTerminalOpen: openOverlays.terminal,
    handleCloseOverlay,
    handleOpenOverlay,
  }
}

export default useHomeHandlers
