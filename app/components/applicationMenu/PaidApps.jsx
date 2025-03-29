import Link from "next/link";

const FreeApps = () => {
  return (
    <div className=" border-t-1 border-border-main dark:border-border-main-dark">
      <h2 className="font-semibold text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark px-4 mb-4 pt-5">Platené aplikácie</h2>
      <div className="grid grid-cols-4 mt-4 w-full px-4">
        {[
          { src: '/icons/photoPlaceholder.svg', label: 'Kalkulačka' },
          { src: '/icons/photoPlaceholder.svg', label: 'GPS' },
          { src: '/icons/photoPlaceholder.svg', label: 'Faktúra' },
          { src: '/icons/photoPlaceholder.svg', label: 'Viac' },
        ].map((item, index) => (
          <Link key={index} href="/calculations" className="flex flex-col items-center cursor-pointer">
            <div className="min-w[48px] min-h-[40px] w-[40px] h-[48px rounded-md bg-gray1 dark:bg-gray1-dark"></div>
            <p className="text-[10px] text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FreeApps;
