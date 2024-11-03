import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaCalendarAlt, FaBrain } from 'react-icons/fa';

function AchievementCard() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg h-full w-[400px] transition-all duration-300 hover:scale-105 hover:shadow-xl p-6">
        
        {/* Card Header */}
        <div className="flex flex-col items-center mb-6">
          <FaTrophy className="w-14 h-14 text-purple-500 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">Achievements</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-1">Track your progress and keep motivated!</p>
        </div>
        
        {/* Achievement List */}
        <div className="space-y-6">
          {/* Achievement Item 1: First Task Completed */}
          <div className="achievement-item transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-lg shadow">
                <FaMedal className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">First Task Completed</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  <span>October 30, 2024</span>
                </div>
              </div>
            </div>
            <div className="ml-10 h-1 bg-purple-100 dark:bg-purple-800 rounded-full">
              <div className="transition-all duration-300 w-full h-full bg-purple-500 rounded-full" />
            </div>
          </div>

          {/* Achievement Item 2: Perfect Score Streak */}
          <div className="achievement-item transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-lg shadow">
                <FaStar className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Perfect Score Streak</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  <span>November 5, 2024</span>
                </div>
              </div>
            </div>
            <div className="ml-10 h-1 bg-blue-100 dark:bg-blue-800 rounded-full">
              <div className="transition-all duration-300 w-3/4 h-full bg-blue-500 rounded-full" />
            </div>
          </div>

          {/* Achievement Item 3: Skills Mastered */}
          <div className="achievement-item transition-transform duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-800 rounded-lg shadow">
                <FaBrain className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Skills Mastered</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <FaCalendarAlt className="w-4 h-4 mr-1" />
                  <span>December 1, 2024</span>
                </div>
              </div>
            </div>
            <div className="ml-10 h-1 bg-green-100 dark:bg-green-800 rounded-full">
              <div className="transition-all duration-300 w-5/6 h-full bg-green-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
