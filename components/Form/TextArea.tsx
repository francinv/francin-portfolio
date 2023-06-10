import { InputProps } from '@/types';

interface TextAreaProps extends InputProps<HTMLTextAreaElement> {
  rows?: number;
}

const TextArea = ({ value, onChange, name, rows = 5 }: TextAreaProps) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    className="w-full bg-transparent text-white-1000 outline-none resize-none"
    rows={rows}
  />
);

export default TextArea;
