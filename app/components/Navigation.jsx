import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import UserMenu from '@/app/components/UserMenu';
import MobileMenu from '@/app/components/MobileMenu';
import ApplicationButton from '@/app/components/ApplicationButton';
import DesktopNavigation from '@/app/components/DesktopNavigation';
import Search from '@/app/components/Search';

const navigation = [
  { name: 'Domácnosti', href: '#', current: true },
  { name: 'Firmy', href: '#', current: false },
  { name: 'Eshop', href: '#', current: false },
  { name: 'Podpora', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Kontakt', href: '#', current: false },
];

const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-white fixed inset-0 z-50 fixed inset-0 z-50 fixed inset-0">
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image src="/icons/logo.svg" width={25} height={25} alt="Logo" />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <DesktopNavigation navigation={navigation} />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Search isMobile={false} />
            <ApplicationButton />
            <UserMenu />
            <div className="flex items-center md:hidden">
              <MobileMenu navigation={navigation} />
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navigation;
