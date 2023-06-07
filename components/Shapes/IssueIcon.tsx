import { IconProps } from "@/types"

const IssueIcon = ({ className }: IconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.375 6.875L6.25 8.75L9.375 5.625M4.375 14.375L6.25 16.25L9.375 13.125M4.375 21.875L6.25 23.75L9.375 20.625M13.75 7.5H25M13.75 15H25M13.75 22.5H25"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default IssueIcon
