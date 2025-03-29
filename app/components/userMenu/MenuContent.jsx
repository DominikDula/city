import { DisclosureButton } from '@headlessui/react';
import UserInfo from '@/app/components/userMenu/UserInfo';
import ActionIcons from '@/app/components/userMenu/ActionIcons';
import AdditionalOptions from '@/app/components/userMenu/AdditionalOptions';
import BottomOptions from '@/app/components/userMenu/BottomOptions';
import DashboardButton from '@/app/components/userMenu/DashboardButton';
import {usePathname} from "next/navigation";
import Image from 'next/image';


const MenuContent = ({ isOpen, toggleMenu }) => {
  const isCalculationsPage = usePathname() === '/calculations';
  return (
    <>
      {/* Mobile View */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 bg-main dark:bg-card-dark bg-opacity-90 transition-all duration-500 ease-out transform space-y-4 ${
          isOpen
            ? `${isCalculationsPage ? '-translate-y-20' : 'translate-y-0'} overflow-y-auto`
            : 'translate-y-full'
        } md:hidden`}
        style={{ height: '70vh' }}
      >
        <div className="flex justify-between p-2">
          <p className="text-t-main text-xs dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Odhlásiť</p>
          <DisclosureButton onClick={toggleMenu} className="text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">
            <Image src="/icons/x.svg" width={16} height={16} alt="X" />
          </DisclosureButton>
        </div>
        <UserInfo />
        <ActionIcons />
        <AdditionalOptions />
        <BottomOptions />
        <DashboardButton />
      </div>

      {/* Desktop View */}
      <div
        className={`hidden md:block fixed md:absolute right-0 top-[45px] z-50 rounded-sm bg-main dark:bg-card-dark bg-opacity-90 transition-all duration-500 ease-out transform drop-shadow-md space-y-4 ${
          isOpen ? 'translate-x-0 overflow-y-auto' : 'translate-x-130'
        }`}
        style={{ width: '260px', height: 'auto' }}
      >
        <div className="flex justify-between p-2">
          <p className="text-t-main text-xs dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Odhlásiť</p>
          <DisclosureButton onClick={toggleMenu} className="text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">
            <Image src="/icons/x.svg" width={16} height={16} alt="X" />
          </DisclosureButton>
        </div>
        <UserInfo />
        <ActionIcons />
        <AdditionalOptions />
        <BottomOptions />
        <DashboardButton />
      </div>
    </>
  );
};

export default MenuContent;
