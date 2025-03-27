import Image from 'next/image';
import {XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

const SidebarHeader = ({ closeSidebar }) => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image src="/icons/logo.svg" width={25} height={25} alt="Logo" />
      </Link>
      <button onClick={closeSidebar} className="md:hidden text-gray-500">
        <XMarkIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SidebarHeader;
