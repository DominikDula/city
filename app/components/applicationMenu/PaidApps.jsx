import Link from "next/link";

const FreeApps = () => {
  return (
    <div className=" border-t-1 border-gray-200">
      <h2 className="font-semibold text-sm text-gray-500 px-4 mb-4 pt-5">Platené aplikácie</h2>
      <div className="grid grid-cols-4 mt-4 w-full">
        {[
          { src: '/icons/photoPlaceholder.svg', label: 'Kalkulačka' },
          { src: '/icons/photoPlaceholder.svg', label: 'GPS' },
          { src: '/icons/photoPlaceholder.svg', label: 'Faktúra' },
          { src: '/icons/photoPlaceholder.svg', label: 'Viac' },
        ].map((item, index) => (
          <Link key={index} href="/calculations" className="flex flex-col items-center cursor-pointer">
            <div className="min-w[48px] min-h-[48px] w-[48px] h-[48px rounded-md bg-gray1 dark:bg-gray1-dark"></div>
            <p className="text-xs text-gray-500">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FreeApps;
