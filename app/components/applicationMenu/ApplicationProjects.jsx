import {ChevronRightIcon} from "@heroicons/react/24/outline";

const ApplicationProjects = () => {
  return (
    <div className="px-4">
      <h2 className="font-semibold text-md text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark mb-4">Projekty</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span className="text-xs text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
          <ChevronRightIcon className="h-5 w-5 text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark" />
        </li>
        <li className="flex justify-between items-center">
          <span className="text-xs text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
          <ChevronRightIcon className="h-5 w-5 text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark" />
        </li>
        <li className="flex justify-between items-center">
          <span className="text-xs text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">Option</span>
          <ChevronRightIcon className="h-5 w-5 text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark" />
        </li>
      </ul>
    </div>
  );
};

export default ApplicationProjects;
