import Image from 'next/image';

const NotificationButton = () => {
  return (
    <button type="button" className="">
      <Image src="/icons/bell.svg" width={20} height={20} alt="Logo" />
    </button>
  );
};

export default NotificationButton;
