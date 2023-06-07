import { FlexContainer, H4 } from "@/components"
import ToolbarButton from "./Buttons"
import { ModalToolbarProps } from "./index"

interface DesktopProps extends ModalToolbarProps {
  onFullscreen: () => void
}

const Desktop = ({
  onClose,
  height = 54,
  rightContent,
  title,
  onFullscreen,
}: DesktopProps) => (
  <FlexContainer.Row
    justify="between"
    className="px-6 py-2 bg-gray-100 w-full sticky top-0 left-0"
    style={{ height }}
  >
    <FlexContainer.Row>
      <ToolbarButton.Close onClick={onClose} />
      <ToolbarButton.Minimize onClick={onClose} />
      <ToolbarButton.Expand onClick={onFullscreen} />
      <H4 className="ml-8 font-medium">{title}</H4>
    </FlexContainer.Row>
    {rightContent}
  </FlexContainer.Row>
)

export default Desktop
