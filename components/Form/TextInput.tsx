import { FlexContainer } from "@/components"
import { InputProps } from "@/types"

interface TextInputProps extends InputProps<HTMLInputElement> {
  readOnly?: boolean
}

const TextInput = ({
  label,
  value,
  onChange,
  name,
  readOnly = false,
  type = "text",
}: TextInputProps) => (
  <FlexContainer.Row className="py-2 border-b border-gray-500" justify="start">
    <label htmlFor={name} className="text-gray-400 text-md font-primary">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="ml-2 bg-transparent text-white-1000 outline-none w-full text-md font-primary"
      readOnly={readOnly}
    />
  </FlexContainer.Row>
)

export default TextInput
