import { H3, ModalToolbar, SendIcon } from "@/components"
import { useState } from "react"
import { useDimensions } from "@/hooks"

interface MailToolbarProps {
  isFormValid: boolean
  onSubmit: () => void
  onClose: () => void
}

const MailToolbar = ({ isFormValid, onSubmit, onClose }: MailToolbarProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { isSmallScreen } = useDimensions()

  return {
    isFullscreen,
    jsx: isSmallScreen ? (
      <ModalToolbar.Mobile
        leftContent={
          <button onClick={onClose}>
            <H3 weight="normal" className="text-blue-200">
              Cancel
            </H3>
          </button>
        }
        onClose={onClose}
        appBarColor="bg-black-1000"
        bgColor="bg-gray-600"
      />
    ) : (
      <ModalToolbar.Desktop
        onClose={onClose}
        onFullscreen={() => setIsFullscreen(!isFullscreen)}
        rightContent={
          <button
            disabled={!isFormValid}
            className="rounded-lg hover:bg-gray-200 transition-colors px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onSubmit}
          >
            <SendIcon />
          </button>
        }
      />
    ),
  }
}

export default MailToolbar
