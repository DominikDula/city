import {ChevronRightIcon} from "@heroicons/react/24/outline";

const ApplicationProjects = () => {
  return (
    <div className="px-4">
      <h2 className="font-semibold text-md text-gray-500 mb-4">Projekty</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Option</span>
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </li>
        <li className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Option</span>
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </li>
        <li className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Option</span>
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </li>
      </ul>
    </div>
  );
};

export default ApplicationProjects;
