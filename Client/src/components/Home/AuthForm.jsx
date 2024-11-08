import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AuthForm({ type }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form submission
    navigate('/Dashboard'); // Navigates to Dashboard
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 pl-10 shadow-sm bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
            placeholder="Enter your email"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaEnvelope className="text-gray-400 dark:text-gray-300" />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 pl-10 shadow-sm bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
            placeholder="Enter your password"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaLock className="text-gray-400 dark:text-gray-300" />
          </div>
        </div>
      </div>

      {type === 'register' && (
        <div>
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 pl-10 shadow-sm bg-white dark:bg-gray-700 focus:border-blue-500 focus:ring-blue-500 transition-all duration-200"
              placeholder="Confirm your password"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <FaLock className="text-gray-400 dark:text-gray-300" />
            </div>
          </div>
        </div>
      )}

      {type === 'login' && (
        <div className="flex items-center justify-between text-sm mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <label className="ml-2 text-gray-700 dark:text-gray-300">
              Remember me
            </label>
          </div>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 font-medium"
          >
            Forgot password?
          </a>
        </div>
      )}

      <button
        type="submit"
        className="w-full mt-6 rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      >
        {type === 'login' ? 'Sign In' : 'Create Account'}
      </button>
    </form>
  );
}

export default AuthForm;
