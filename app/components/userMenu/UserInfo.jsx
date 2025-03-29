import Image from 'next/image';

const UserInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/icons/avatar.png" width={48} height={48} className="rounded-full" alt="User Profile" />
      <div className="text-center text-t-main-hover dark:text-t-main-hover-dark">
        <p className="text-lg font-bold">Miroslav Havrila</p>
        <p className="text-xs" >ITcity s. r. o.</p>
      </div>
    </div>
  );
};

export default UserInfo;
