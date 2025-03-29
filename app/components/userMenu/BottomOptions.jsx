import { ChevronRightIcon } from '@heroicons/react/24/outline';

const BottomOptions = () => {
  return (
    <div className="w-full px-3 py-4 space-y-2 border-y-1 border-border-main dark:border-border-main-dark">
      {['Option', 'Option', 'Option'].map((option, index) => (
        <div key={index} className="flex justify-between py-1">
          <p className="text-xs text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">{option}</p>
          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default BottomOptions;
