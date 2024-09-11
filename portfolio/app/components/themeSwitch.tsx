'use client'; // Client component

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    // 1. Check if the user has a saved preference in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      applyTheme(savedTheme === 'dark');
    } else {
      // 2. Otherwise, use the system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(systemPrefersDark);
      applyTheme(systemPrefersDark);
    }
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleThemeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    applyTheme(newMode);
  };

  return (
    <label className='relative inline-block w-16 h-8'>
      <input
        type='checkbox'
        className='hidden'
        checked={isDarkMode || false}
        onChange={handleThemeToggle}
      />
      {/* Background slider */}
      <div
        className={`absolute inset-0 cursor-pointer transition-colors duration-300 ease-in-out rounded-full 
          ${isDarkMode ? 'bg-zinc-900' : 'bg-zinc-300'}`}></div>

      {/* Sun/Moon Icons */}
      <div className='absolute left-2 top-1/2 transform -translate-y-1/2'>
        <FontAwesomeIcon
          icon={faMoon}
          className={`text-white ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        />
      </div>
      <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
        <FontAwesomeIcon
          icon={faSun}
          className={`text-white ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300`}
        />
      </div>

      {/* The sliding toggle */}
      <div
        className={`absolute bg-white w-6 h-6 rounded-full top-1 left-1 transition-transform duration-300 ease-in-out
          ${isDarkMode ? 'transform translate-x-8' : ''}`}
      />
    </label>
  );
};

export default ThemeSwitch;
