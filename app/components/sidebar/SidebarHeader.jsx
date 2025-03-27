import Image from 'next/image';
import {XMarkIcon} from "@heroicons/react/24/outline";

const SidebarHeader = ({ closeSidebar }) => {
  return (
    <div className="flex items-center justify-between">
      <Image src="/icons/logo.svg" width={32} height={32} alt="Logo" />
      <button onClick={closeSidebar} className="md:hidden text-gray-500">
        <XMarkIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SidebarHeader;
