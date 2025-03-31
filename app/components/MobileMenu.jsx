'use client';

import { DisclosureButton } from '@headlessui/react';
import { useState } from 'react';
import Search from '@/app/components/Search';
import Image from 'next/image';

const MobileMenu = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <DisclosureButton
        onClick={toggleMenu}
        className="relative flex items-center"
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <Image src="/icons/m-menu.svg" width={20} height={20} alt="M-menu" />
      </DisclosureButton>

      <div
        className={`fixed inset-0 z-50 bg-nav dark:bg-nav-dark bg-opacity-90 transition-transform duration-500 ease-out transform flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ height: '100vh' }}
      >
        <div>
          <div className="flex justify-end p-4">
            <DisclosureButton onClick={toggleMenu} className="text-gray-400">
              <Image src="/icons/x.svg" width={20} height={20} alt="X icon" />
            </DisclosureButton>
          </div>
          <div className="flex flex-col items-start space-y-4">
            {navigation.map((item, index) => (
              <DisclosureButton
                key={index}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                onClick={toggleMenu}
                className={`block px-4 py-2 text-lg font-semibold transition-colors duration-200 ${
                  item.current ? 'font-bold text-t-main-hover dark:text-t-main-hover-dark' : 'text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark'
                }`}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
        <Search isMobile={true} />
      </div>
    </>
  );
};

export default MobileMenu;
