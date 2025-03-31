import Image from 'next/image';

const MessageButton = () => {
  return (
    <button type="button">
      <Image src="/icons/messages.svg" width={20} height={20} alt="Logo" />
    </button>
  );
};

export default MessageButton;
