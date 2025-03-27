import Image from 'next/image';

const NotificationButton = () => {
  return (
    <button type="button" className="">
      <Image src="/icons/bell.svg" width={25} height={25} alt="Logo" />
    </button>
  );
};

export default NotificationButton;
