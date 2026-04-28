import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-500 focus:outline-none shadow-inner flex items-center ${
        isDark ? 'bg-[#3b2a4a] border border-gray-600' : 'bg-[#EADDF8] border border-[#C3B1E1]/50'
      }`}
      aria-label="Toggle Dark Mode"
    >
      {/* Moon / Sun Icons in Background */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400">
          <path d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.758a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
      </div>

      {/* The Toggle Thumb */}
      <div
        className={`absolute left-1 w-6 h-6 rounded-full transition-transform duration-500 flex items-center justify-center transform shadow-lg ${
          isDark ? 'translate-x-8 bg-[#1a1a1a]' : 'translate-x-0 bg-white'
        }`}
      >
        {/* Optional: we can put a small sun/moon inside the thumb as well, but it might be overkill since we have background icons */}
      </div>
    </button>
  );
};

export default ThemeToggle;
