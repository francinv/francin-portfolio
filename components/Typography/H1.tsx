import { TypographyProps } from "@/types"

const H1 = ({
  children,
  className = "",
  font = "font-tertiary",
  weight = "medium",
  color = "text-black-1000",
}: TypographyProps) => (
  <h1 className={`text-3xl font-${weight} ${color} ${font} ${className}`}>
    {children}
  </h1>
)

export default H1
