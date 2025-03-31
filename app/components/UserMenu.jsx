'use client';

import { Menu, MenuButton } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import MenuContent from '@/app/components/userMenu/MenuContent';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {isOpen && <div className="fixed w-full inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"></div>}
      <Menu as="div" className="relative">
        <div className="flex items-center">
          <MenuButton onClick={toggleMenu}>
            <Image src="/icons/profile.svg" width={20} height={20} alt="Logo" />
          </MenuButton>
        </div>
        <MenuContent isOpen={isOpen} toggleMenu={toggleMenu} />
      </Menu>
    </>
  );
};

export default UserMenu;
