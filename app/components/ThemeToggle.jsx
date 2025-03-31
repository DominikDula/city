'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) return null;

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? (
        <Image src="/icons/sun.svg" width={20} height={20} alt="Light Mode" />
      ) : (
        <Image src="/icons/moon.svg" width={20} height={20} alt="Dark Mode" />
      )}
    </button>
  );
};

export default ThemeToggle;