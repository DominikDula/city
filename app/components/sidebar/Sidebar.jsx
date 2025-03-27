'use client';

import { useState, useEffect } from 'react';
import SidebarHeader from './SidebarHeader';
import NavigationLink from './NavigationLink';
import InternaAgendaAccordion from './InternaAgendaAccordion';
import MobileMenu from './MobileMenu';

const navigation = [
  { name: 'Projekt manažment', icon: '/icons/management.svg' },
  { name: 'Obchodná agenda', icon: '/icons/agenda.svg' },
  { name: 'Sklady', icon: '/icons/stock.svg' },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isInternaAgendaOpen, setIsInternaAgendaOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let timer;
    if (isSidebarOpen) {
      timer = setTimeout(() => setShowText(true), 300);
    } else {
      setShowText(false);
      setIsInternaAgendaOpen(false);
    }
    return () => clearTimeout(timer);
  }, [isSidebarOpen]);

  return (
    <>
      <MobileMenu toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div
        className={`fixed inset-y-0 left-0 w-full bg-white shadow-md transform transition-all duration-300 ease-in-out z-40 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:w-16 md:hover:w-64`}
        onMouseEnter={!isMobile ? () => setIsSidebarOpen(true) : undefined}
        onMouseLeave={!isMobile ? () => setIsSidebarOpen(false) : undefined}
      >
        <div className="flex flex-col h-full p-4 space-y-4">
          <SidebarHeader closeSidebar={() => setIsSidebarOpen(false)} />

          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <NavigationLink key={item.name} name={item.name} icon={item.icon} showText={showText} />
            ))}

            <InternaAgendaAccordion
              isOpen={isInternaAgendaOpen}
              toggleAccordion={() => setIsInternaAgendaOpen(!isInternaAgendaOpen)}
              showText={showText}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
