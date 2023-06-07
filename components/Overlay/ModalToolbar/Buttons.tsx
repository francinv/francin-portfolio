import { ExpandIcon, MinusIcon, XIcon } from '@/components';

interface ButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className="bg-red-100 w-15 h-15 rounded-full group">
    <XIcon.Desktop />
  </button>
);

const MinimizeButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className="bg-yellow-100 w-15 h-15 rounded-full group ml-2">
    <MinusIcon />
  </button>
);

const ExpandButton = ({ onClick }: ButtonProps) => (
  <button onClick={onClick} className="bg-green-100 w-15 h-15 rounded-full group ml-2">
    <ExpandIcon />
  </button>
);

const ToolbarButton = {
  Close: CloseButton,
  Minimize: MinimizeButton,
  Expand: ExpandButton,
};

export default ToolbarButton;
