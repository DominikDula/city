'use client';

import { useState } from 'react';
import Image from 'next/image';

const Search = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const toggleSearch = () => setIsOpen((prev) => !prev);
  const clearInput = () => setQuery('');

  if (isMobile) {
    return (
      <>
        <div className="fixed bottom-0 left-0 right-0 bg-nav dark:bg-nav-dark p-4">
          <input
            type="text"
            placeholder="Hľadať"
            className="w-full border-b-2 border-border-main dark:border-border-main-dark placeholder-gray-500 focus:outline-none"
            onFocus={toggleSearch}
          />
        </div>

        {isOpen && (
          <div className="fixed inset-0 top-[40px] bg-nav dark:bg-nav-dark z-50 flex flex-col p-6">
            <div className="flex justify-between items-center relative pl-8">
              <Image className="absolute bottom-[2px] -left-[8px]" src="/icons/search.svg" width={32} height={32} alt="Search" />
              <input
                type="text"
                placeholder="Hľadať"
                className="w-full placeholder-t-main mt-5 dark:placeholder-t-main-dark focus:outline-none text-2xl font-bold text-t-main-hover dark:text-t-main-hover-dark"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              {query && (
                <button onClick={clearInput} className="text-gray-500 hover:text-gray-700">
                  <Image src="/icons/x-search.svg" width={20} height={20} alt="Clear input" />
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="flex hidden md:flex">
      <button onClick={toggleSearch} className="focus:outline-none">
        <Image src="/icons/search.svg" width={25} height={25} alt="SearchIcon" />
      </button>
      {isOpen && (
        <div className="fixed inset-x-0 top-[40px] h-1/2 bg-nav dark:bg-nav-dark bg-opacity-90 backdrop-blur-md z-50 p-6 flex flex-col items-center space-y-4 shadow-xs">
          <div className="flex items-center justify-center w-1/2 relative">
            <Image className="absolute bottom-[2px] -left-[42px]" src="/icons/search.svg" width={32} height={32} alt="Search" />
            <input
              type="text"
              placeholder="Hľadať"
              className="w-full placeholder-t-main mt-5 dark:placeholder-t-main-dark focus:outline-none text-3xl font-bold text-t-main-hover dark:text-t-main-hover-dark"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button onClick={clearInput} className="absolute right-8">
                <Image src="/icons/x-search.svg" width={20} height={20} alt="Clear input" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
