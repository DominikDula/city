import { DisclosureButton } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import UserInfo from '@/app/components/userMenu/UserInfo';
import ActionIcons from '@/app/components/userMenu/ActionIcons';
import AdditionalOptions from '@/app/components/userMenu/AdditionalOptions';
import BottomOptions from '@/app/components/userMenu/BottomOptions';
import DashboardButton from '@/app/components/userMenu/DashboardButton';


const MenuContent = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* Mobile View */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 bg-white bg-opacity-90 transition-all duration-500 ease-out transform space-y-4 ${
          isOpen ? 'translate-y-0 overflow-y-auto' : 'translate-y-full'
        } md:hidden`}
        style={{ height: '70vh' }}
      >
        <div className="flex justify-end p-2">
          <DisclosureButton onClick={toggleMenu} className="text-gray-500">
            <XMarkIcon className="h-8 w-8" />
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
        className={`hidden md:block fixed md:absolute right-0 top-0 z-50 bg-white bg-opacity-90 transition-all duration-500 ease-out transform drop-shadow-md space-y-4 ${
          isOpen ? 'translate-x-0 overflow-y-auto' : 'translate-x-100'
        }`}
        style={{ width: '350px', height: 'auto' }}
      >
        <div className="flex justify-end p-2">
          <DisclosureButton onClick={toggleMenu} className="text-gray-500">
            <XMarkIcon className="h-8 w-8" />
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
