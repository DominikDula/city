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
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"></div>}
      <Menu as="div" className="relative ml-3">
        <div className="flex items-center">
          <MenuButton onClick={toggleMenu}>
            <Image src="/icons/profile.svg" width={25} height={25} alt="Logo" />
          </MenuButton>
        </div>
        <MenuContent isOpen={isOpen} toggleMenu={toggleMenu} />
      </Menu>
    </>
  );
};

export default UserMenu;
