import { TypographyProps } from "@/types"

const P = ({
  children,
  className = "font-normal",
  font = "font-primary",
  color = "text-white-1000",
}: TypographyProps) => (
  <p className={`text-base ${color} ${font} ${className}`}>{children}</p>
)

export default P
