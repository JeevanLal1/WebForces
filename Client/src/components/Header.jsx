import { useState } from 'react';
import { FiSearch, FiBell, FiSun, FiMoon } from 'react-icons/fi';

function Header({ toggleDarkMode, isDarkMode }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, <span className="text-primary">User</span>
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FiSearch className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
          </button>

          <button
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300
                     hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors relative"
          >
            <FiBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden cursor-pointer">
            <img
              src="../src/assets/image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
