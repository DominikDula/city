import Image from 'next/image';
import Link from 'next/link';

const AdditionalOptions = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 w-full pt-5 px-5 border-t-1 border-border-main dark:border-border-main-dark">
      {[
          { src: '/icons/photoPlaceholder.svg', label: 'Kalkulačka' },
          { src: '/icons/photoPlaceholder.svg', label: 'GPS' },
          { src: '/icons/photoPlaceholder.svg', label: 'Faktúra' },
          { src: '/icons/photoPlaceholder.svg', label: 'Viac' },
        ].map((item, index) => (
          <Link key={index} href="/calculations" className="flex flex-col items-center cursor-pointer">
            <div className="md:min-h-[40px] md:w-[40px] min-h-[48px] w-[48px] rounded-md bg-gray1 dark:bg-gray1-dark"></div>
            <p className="text-[10px] text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">{item.label}</p>
          </Link>
        ))}
    </div>
  );
};

export default AdditionalOptions;
