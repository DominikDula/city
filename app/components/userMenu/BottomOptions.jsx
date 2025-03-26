import { ChevronRightIcon } from '@heroicons/react/24/outline';

const BottomOptions = () => {
  return (
    <div className="w-full px-6 mt-4 space-y-2 border-y-1 border-gray-200">
      {['Option', 'Option', 'Option'].map((option, index) => (
        <div key={index} className="flex justify-between py-2">
          <p className="text-gray-600">{option}</p>
          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default BottomOptions;
