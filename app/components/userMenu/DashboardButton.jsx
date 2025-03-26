import Image from 'next/image';

const DashboardButton = () => {
  return (
    <div className="w-full px-6 mt-4 pb-3">
      <button className="w-full bg-brand text-white py-3 rounded-md flex items-center justify-center space-x-2">
        <Image src="/icons/profile-white.svg" width={25} height={25} alt="Logo" />
        <span>Nástenka</span>
      </button>
    </div>
  );
};

export default DashboardButton;
