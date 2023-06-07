import { ModalProps } from '@/types';
import {
  ArrowUpFilledIcon,
  FlexContainer,
  H1,
  IconButton,
  ModalWrapper,
  P,
  TextArea,
  TextInput,
} from '@/components';
import MailToolbarContent from './MailToolbar';
import { useRegistrationForm } from '@/hooks';

const MailWindow = ({ isOpen, onClose }: ModalProps) => {
  const { form, isFormValid, handleSubmit, handleChange } = useRegistrationForm();
  const { jsx, isFullscreen } = MailToolbarContent({
    isFormValid,
    onSubmit: handleSubmit,
    onClose,
  });

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} toolbar={jsx} isFullscreen={isFullscreen}>
      <form
        className="bg-gray-600 w-full h-full pl-5 md:bg-black-300"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FlexContainer.Row className="py-2 block md:hidden" items="center" justify="center">
          <H1 font="font-primary" weight="semibold" className="text-white-1000">
            New message
          </H1>
          <IconButton
            icon={<ArrowUpFilledIcon disabled={!isFormValid} />}
            className="ml-auto mr-4"
            type="submit"
          />
        </FlexContainer.Row>
        <TextInput
          value={form.to}
          name="to"
          onChange={handleChange}
          label="To:"
          readOnly={true}
          type="email"
        />
        <TextInput value={form.subject} name="subject" onChange={handleChange} label="Subject:" />
        <TextInput
          label="From:"
          value={form.from}
          onChange={handleChange}
          name="from"
          type="email"
        />
        <TextInput label="Name:" value={form.name} onChange={handleChange} name="name" />
        <FlexContainer.Column className="py-2 pr-2" items="start">
          <TextArea name="message" onChange={handleChange} value={form.message} rows={10} />
          <div>
            {form.name && <P className="text-md text-gray-400">Best regards, {form.name}</P>}
            <P className="text-md text-gray-400">{form.from}</P>
          </div>
        </FlexContainer.Column>
      </form>
    </ModalWrapper>
  );
};

export default MailWindow;
