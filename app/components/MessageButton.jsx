import Image from 'next/image';

const MessageButton = () => {
  return (
    <button type="button">
      <Image src="/icons/messages.svg" width={25} height={25} alt="Logo" />
    </button>
  );
};

export default MessageButton;
