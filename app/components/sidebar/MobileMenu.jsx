import Image from 'next/image';

const MobileMenu = ({ toggleSidebar }) => {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-main dark:bg-main-dark shadow-lg flex justify-between items-center p-2">
      <button className="p-2">
        <Image src="/icons/search.svg" width={24} height={24} alt="Search" />
        <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
      </button>
      <button className="p-2">
        <Image src="/icons/moon.svg" width={24} height={24} alt="Mode" />
        <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
      </button>
      <button className="p-2">
        <Image src="/icons/sun.svg" width={24} height={24} alt="Option" />
        <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
      </button>
      <button className="p-2">
        <Image src="/icons/cart.svg" width={24} height={24} alt="Cart" />
        <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
      </button>
      <button onClick={toggleSidebar} className="p-2">
        <Image src="/icons/more.svg" width={24} height={24} alt="More" />
        <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">More</span>
      </button>
    </div>
  );
};

export default MobileMenu;
