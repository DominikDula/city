import Image from 'next/image';

const DashboardButton = () => {
  return (
    <div className="w-full px-3 mt-4 pb-3">
      <button className="w-full bg-brand text-white py-2 rounded-md flex items-center justify-center space-x-2 cursor-pointer">
        <Image src="/icons/profile-white.svg" width={20} height={20} alt="Logo" />
        <span>Nástenka</span>
      </button>
    </div>
  );
};

export default DashboardButton;
