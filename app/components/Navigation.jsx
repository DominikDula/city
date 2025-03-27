import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import UserMenu from '@/app/components/UserMenu';
import MobileMenu from '@/app/components/MobileMenu';
import ApplicationButton from '@/app/components/ApplicationButton';
import NotificationButton from '@/app/components/NotificationButton';
import MessageButton from '@/app/components/MessageButton';
import DesktopNavigation from '@/app/components/DesktopNavigation';
import Search from '@/app/components/Search';
import Link from "next/link";

const navigation = [
  { name: 'Domácnosti', href: '#', current: true },
  { name: 'Firmy', href: '#', current: false },
  { name: 'Eshop', href: '#', current: false },
  { name: 'Podpora', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Kontakt', href: '#', current: false },
];

const Navigation = ({ showLogo = true, showDesktopNavigation = true, showSearch = true, showMobileMenu = true, showMessages = false, showNotifications = false }) => {
  return (
    <Disclosure as="nav" className="fixed inset-0 fixed inset-0 z-50 fixed inset-0">
      <div className="bg-white shadow-sm mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {showLogo && (
            <div className="flex items-center">
              <Link href="/">
                <Image src="/icons/logo.svg" width={25} height={25} alt="Logo" />
              </Link>
            </div>
          )}

          {showDesktopNavigation && (
            <div className="flex flex-1 justify-center sm:justify-start">
              <DesktopNavigation navigation={navigation} />
            </div>
          )}

          <div className="ml-auto flex items-center">
            {showSearch && <Search isMobile={false} />}
            {showNotifications && <NotificationButton />}
            {showMessages && <MessageButton />}
            <ApplicationButton />
            <UserMenu />
            {showMobileMenu && (
              <div className="md:hidden">
                <MobileMenu navigation={navigation} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navigation;
