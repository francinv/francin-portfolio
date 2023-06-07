import { TypographyProps } from "@/types"

const H3 = ({
  children,
  className = "",
  font = "font-primary",
  weight = "medium",
}: TypographyProps) => (
  <h3 className={`text-2xl font-${weight} ${font} ${className}`}>{children}</h3>
)

export default H3
