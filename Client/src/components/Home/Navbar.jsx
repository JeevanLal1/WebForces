import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ darkMode, toggleDarkMode, openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 dark:bg-gray-900/80 shadow-md">
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="ml-20 flex-shrink-0">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Studify
            </span>
          </div>

          <div className="hidden text-lg font-semibold md:flex items-center space-x-7">
            <a href="#" className="text-slate-600 hover:text-blue-500 dark:text-gray-200">About</a>
            <a href="#" className="text-slate-600 hover:text-blue-500 dark:text-gray-200">Features</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun className="text-white w-5 h-5" /> : <FaMoon className="text-blue-300 hover:text-blue-600 w-5 h-5" />}
            </button>
            <button
              onClick={() => openModal('login')}
              className="px-4 py-2 font-semibold rounded-lg text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-gray-800"
            >
              Login
            </button>
            <button
              onClick={() => openModal('register')}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Features</a>
            <button
              onClick={() => openModal('login')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Login
            </button>
            <button
              onClick={() => openModal('register')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Register
            </button>
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <FaSun className="text-white w-5 h-5" /> : <FaMoon className="text-blue-300 hover:text-blue-600 w-5 h-5" />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
