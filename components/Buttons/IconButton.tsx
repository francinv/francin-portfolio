import { ReactNode } from "react"
import { BaseButtonProps } from "@/types"
import { P } from "@/components"

interface IconButtonProps extends BaseButtonProps {
  icon: ReactNode
  labelSize?: "sm" | "md" | "lg"
}

const IconButton = ({
  icon,
  onClick,
  label,
  className = "",
  labelSize = "lg",
  type = "button",
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group ${className} flex flex-col justify-center items-center`}
      type={type}
    >
      {icon}
      {label && <P className={`text-${labelSize}`}>{label}</P>}
    </button>
  )
}

export default IconButton
