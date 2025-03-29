import Image from 'next/image';

const NavigationLink = ({ name, icon, showText }) => {
  return (
    <a href="#" className="flex w-full h-[30px] items-center space-x-3 p-2 rounded-md text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark hover:bg-gray-100">
      <Image src={icon} width={16} height={16} alt="Icon" />
      <span className={`${showText ? 'md:block' : 'md:hidden'} text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark`}>{name}</span>
    </a>
  );
};

export default NavigationLink;
