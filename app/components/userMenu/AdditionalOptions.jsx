import Image from 'next/image';
import Link from 'next/link';

const AdditionalOptions = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 w-full pt-5 border-t-1 border-gray-200">
      {[
        { src: '/icons/photoPlaceholder.svg', label: 'Kalkulačka' },
        { src: '/icons/photoPlaceholder.svg', label: 'GPS' },
        { src: '/icons/photoPlaceholder.svg', label: 'Faktúra' },
        { src: '/icons/photoPlaceholder.svg', label: 'Viac' }
      ].map((item, index) => (
          <Link key={index} href="/calculations" className="flex flex-col items-center cursor-pointer">
            <Image src={item.src} width={48} height={48} alt={item.label} />
            <p className="text-xs text-gray-600">{item.label}</p>
          </Link>
      ))}
    </div>
  );
};

export default AdditionalOptions;
