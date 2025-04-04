import Image from 'next/image';

const InternaAgendaAccordion = ({ isOpen, toggleAccordion, showText }) => {
  return (
    <div>
      <button
        onClick={toggleAccordion}
        className="flex w-full h-[30px] items-center space-x-3 p-1 rounded-md text-gray-800 hover:bg-gray-100 dark:hover:bg-gray1-dark"
      >
        <Image src="/icons/management.svg" width={20} height={20} alt="Interna Agenda" />
        <span className={`${showText ? 'md:block' : 'md:hidden'} text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark`}>Interná agenda</span>
        <Image
          src="/icons/arrow.svg"
          width={12} height={12}
          alt="Arrow"
          className={`${showText ? 'md:block' : 'md:hidden'} ml-auto transition-transform dark:invert ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <ul className="mt-2 space-y-1">
          {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
            <li key={index} className="flex w-full h-[30px] items-center space-x-3 p-1 rounded-md text-gray-800 hover:bg-gray-100 dark:hover:bg-gray1-dark">
              <Image src="/icons/sun.svg" width={20} height={20} alt={`Option ${index + 1}`} />
              <span className="text-sm text-t-main dark:text-t-main-dark hover:text-t-main-hover dark:hover:text-t-main-hover-dark">{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InternaAgendaAccordion;
