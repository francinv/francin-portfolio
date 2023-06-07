import { TypographyProps } from "@/types"

const H4 = ({
  children,
  className = "",
  font = "font-primary",
}: TypographyProps) => (
  <h4 className={`text-lg font-bold ${font} ${className}`}>{children}</h4>
)

export default H4
