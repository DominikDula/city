'use client';

import { usePathname } from 'next/navigation'
import { DisclosureButton } from '@headlessui/react';
import ApplicationProjects from '@/app/components/applicationMenu/ApplicationProjects';
import FreeApps from '@/app/components/applicationMenu/FreeApps';
import PaidApps from '@/app/components/applicationMenu/PaidApps';
import Image from 'next/image';

const ApplicationMenuContent = ({ isOpen, toggleMenu }) => {
  const isCalculationsPage = usePathname() === '/calculations';

  return (
    <>
      {/* Mobile View */}
      <div
        className={`fixed inset-x-0 bottom-0 z-60 bg-main dark:bg-card-dark bg-opacity-90 transition-all duration-500 ease-out transform space-y-4 ${
          isOpen
            ? `${isCalculationsPage ? '-translate-y-20' : 'translate-y-0'} overflow-y-auto`
            : 'translate-y-full'
        } md:hidden`}
        style={{ height: '70vh' }}
      >
        <div className="flex justify-end p-2">
          <DisclosureButton onClick={toggleMenu} className="text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">
            <Image src="/icons/x.svg" width={16} height={16} alt="X" />
          </DisclosureButton>
        </div>
        <ApplicationProjects />
        <FreeApps />
        <PaidApps />
      </div>

      {/* Desktop View */}
      <div
        className={`hidden md:block fixed md:absolute right-0 top-[45px] rounded-sm z-50 bg-main dark:bg-card-dark bg-opacity-90 transition-all duration-500 ease-out transform drop-shadow-md space-y-4 ${
          isOpen ? 'translate-x-0 overflow-y-auto' : 'translate-x-130'
        }`}
        style={{ width: '260px', height: 'auto', minHeight: '456px' }}
      >
        <div className="flex justify-end p-2">
          <DisclosureButton onClick={toggleMenu} className="text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">
            <Image src="/icons/x.svg" width={16} height={16} alt="X" />
          </DisclosureButton>
        </div>
        <ApplicationProjects />
        <FreeApps />
        <PaidApps />
      </div>
    </>
  );
};

export default ApplicationMenuContent;

