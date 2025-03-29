import Image from 'next/image';
import Link from "next/link";

const SidebarHeader = ({ closeSidebar }) => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image src="/icons/logo.svg" width={25} height={25} alt="Logo" />
      </Link>
      <button onClick={closeSidebar} className="md:hidden text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">
        <Image src="/icons/x.svg" width={20} height={20} alt="X icon" />
      </button>
    </div>
  );
};

export default SidebarHeader;
