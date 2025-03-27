'use client'

import { useState } from 'react';
import Image from 'next/image';

const Search = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearch = () => setIsOpen((prev) => !prev);

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-main dark:bg-nav-dark p-4">
        <input
          type="text"
          placeholder="Hľadať"
          className="w-full border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none"
        />
      </div>
    );
  }

  return (
    <div className="flex mr-2 hidden md:flex">
      {isOpen && (
        <input
          type="text"
          placeholder="Hľadať"
          className="border-b-1 border-gray-300 placeholder-gray-500 focus:outline-none"
        />
      )}
      <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700 focus:outline-none">
        <Image src="/icons/search.svg" width={25} height={25} alt="SearchIcon" />
      </button>
    </div>
  );
};

export default Search;
