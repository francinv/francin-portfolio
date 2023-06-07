import { TypographyProps } from "@/types"

const H5 = ({
  children,
  className = "",
  font = "font-primary",
}: TypographyProps) => (
  <h5 className={`text-xl font-medium ${font} ${className}`}>{children}</h5>
)

export default H5
