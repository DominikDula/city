import Image from 'next/image';

const ActionIcons = () => {
  return (
    <div className="flex justify-center space-x-6">
      <div className="flex flex-col items-center relative">
        <Image src="/icons/cart.svg" width={32} height={32} alt="Cart" />
        <p className="text-xs bg-gray-500 text-white p-2 rounded-xs notification">0</p>
      </div>
      <div className="flex flex-col items-center relative">
        <Image src="/icons/bell.svg" width={32} height={32} alt="Bell" />
        <p className="text-xs bg-gray-500 text-white p-2 rounded-xs notification">0</p>
      </div>
      <div className="flex flex-col items-center relative">
        <Image src="/icons/messages.svg" width={32} height={32} alt="Messages" />
        <p className="text-xs bg-red-300 text-white p-2 rounded-xs notification">10</p>
      </div>
    </div>
  );
};

export default ActionIcons;
