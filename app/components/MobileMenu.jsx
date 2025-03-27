'use client';

import { DisclosureButton } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Search from '@/app/components/Search';

const MobileMenu = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <DisclosureButton
        onClick={toggleMenu}
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
      >
        <span className="absolute -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="block size-6" />
      </DisclosureButton>

      <div
        className={`fixed inset-0 z-50 bg-main dark:bg-nav-dark bg-opacity-90 transition-transform duration-500 ease-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ height: '100vh' }}
      >
        <div className="flex justify-end p-4">
          <DisclosureButton onClick={toggleMenu} className="text-gray-400">
            <XMarkIcon className="h-8 w-8" />
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
                item.current ? 'font-bold text-gray-700' : 'text-gray-500 hover:text-black'
              }`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <Search isMobile={true} />
      </div>
    </>
  );
};

export default MobileMenu;
