import Image from 'next/image';
import Link from "next/link";

const FreeApps = () => {
  return (
    <div className=" border-t-1 border-gray-200">
      <h2 className="font-semibold text-sm text-gray-500 px-4 mb-4 pt-5">Aplikácie zdarma</h2>
      <div className="grid grid-cols-4 mt-4 w-full">
        {[
          { src: '/icons/photoPlaceholder.svg', label: 'Kalkulačka' },
          { src: '/icons/photoPlaceholder.svg', label: 'GPS' },
          { src: '/icons/photoPlaceholder.svg', label: 'Faktúra' },
          { src: '/icons/photoPlaceholder.svg', label: 'Viac' },
        ].map((item, index) => (
          <Link key={index} href="/calculations" className="flex flex-col items-center cursor-pointer">
            <Image src={item.src} width={48} height={48} alt={item.label} />
            <p className="text-xs text-gray-600">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FreeApps;
