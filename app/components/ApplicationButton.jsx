import Image from 'next/image';

const ApplicationButton = () => {
  return (
    <button type="button" className="">
      <Image src="/icons/aplications.svg" width={25} height={25} alt="Logo" />
    </button>
  );
};

export default ApplicationButton;
