import React from 'react';
import { FaBrain, FaChartLine, FaBookOpen } from 'react-icons/fa';

export default function Content() {
  return (
    <div className="relative overflow-hidden h-full bg-gradient-to-br from-blue-200 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Track Your Aura,</span>
              <span className="block text-blue-600 dark:text-blue-400">Boost Your Learning</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-10 sm:text-xl lg:text-lg xl:text-xl">
              Studify helps you track your academic progress, mental well-being, and achieve balance in studies through our innovative Aura Tracking system.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <button className="inline-flex items-center px-6 py-3  border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-800 transition-colors duration-200">
                Get Started
                <FaChartLine className="ml-2 -mr-1 h-5 w-5" />
              </button>
            </div>

            <div className="mt-20 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white mx-auto">
                  <FaBrain className="h-6 w-6" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Mental Wellness</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 dark:bg-purple-600 text-white mx-auto">
                  <FaChartLine className="h-6 w-6" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Progress Tracking</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 dark:bg-teal-600 text-white mx-auto">
                  <FaBookOpen className="h-6 w-6" />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Study Balance</p>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="Students studying"
                  className="w-full"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
