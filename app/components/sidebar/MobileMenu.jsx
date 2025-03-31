import Image from 'next/image';

const MobileMenu = ({ toggleSidebar }) => {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 bg-main dark:bg-main-dark shadow-lg flex justify-between items-center p-2">
      <div className="w-[70%] flex justify-between">
        <button className="p-2 flex flex-col items-center justify-center">
          <Image src="/icons/search.svg" width={20} height={20} alt="Search" />
          <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
        </button>
        <button className="p-2 flex flex-col items-center justify-center">
          <Image src="/icons/moon.svg" width={20} height={20} alt="Mode" />
          <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
        </button>
        <button className="p-2 flex flex-col items-center justify-center">
          <Image src="/icons/sun.svg" width={20} height={20} alt="Option" />
          <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
        </button>
        <button className="p-2 flex flex-col items-center justify-center">
          <Image src="/icons/cart.svg" width={20} height={20} alt="Cart" />
          <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
        </button>
      </div>
      <div className="w-[30%] flex justify-end">
        <button onClick={toggleSidebar} className="p-2 flex flex-col items-center justify-center">
          <Image src="/icons/more.svg" width={20} height={20} alt="More" />
          <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">More</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
