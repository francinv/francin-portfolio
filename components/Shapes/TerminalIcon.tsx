import Image from 'next/image';

const TerminalIcon = () => (
  <Image
    src={'/icons/Terminal.svg'}
    alt={'Icon symbolizing a terminal'}
    width={64}
    height={64}
    className="mx-auto"
  />
);

export default TerminalIcon;
