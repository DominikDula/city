import Image from 'next/image';

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/icons/avatar.png" width={80} height={80} className="rounded-full" alt="User Profile" />
      <div className="text-center text-gray-500">
        <p className="text-lg font-bold">Miroslav Havrila</p>
        <p >ITcity s. r. o.</p>
      </div>
    </div>
  );
};

export default UserInfo;
