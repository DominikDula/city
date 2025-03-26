import Image from 'next/image';

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/icons/avatar.png" width={80} height={80} className="rounded-full" alt="User Profile" />
      <div className="text-center">
        <p className="text-lg font-bold">Miroslav Havrila</p>
        <p className="text-gray-500">ITcity s. r. o.</p>
      </div>
    </div>
  );
};

export default UserInfo;
