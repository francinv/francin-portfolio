import { ReactNode } from "react"
import { H3 } from "@/components/index"

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

const Card = ({ children, title, className = "" }: CardProps) => (
  <div className={`rounded-xl bg-black-100 p-4 pr-7 ${className}`}>
    {title && <H3>{title}</H3>}
    {children}
  </div>
)

export default Card
