import React from 'react';
import { FaTrophy } from 'react-icons/fa';

const stats = [
  { label: 'Assignments Completed', value: 49, color: '#3B82F6' }, 
  { label: 'Classes Attended', value: 15, color: '#F59E0B' }, 
  { label: 'Missed Lectures', value: 10, color: '#EF4444' }, 
];

const total = stats.reduce((acc, stat) => acc + stat.value, 0);

export default function Progress() {
  const completedPercentage = (stats[0].value / total) * 100;
  const attendedPercentage = (stats[1].value / total) * 100;
  const missedPercentage = (stats[2].value / total) * 100;

  return (
    <div className="bg-white dark:bg-gray-800  rounded-xl p-4 h-full w-full shadow-lg transition-transform transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-bold dark:text-white relative left-28 mb-4">My Progress</h3>

      <div className="flex items-center justify-center ml-24 mb-4 relative w-40 h-40">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(
              ${stats[0].color} 0% ${completedPercentage}%,
              ${stats[1].color} ${completedPercentage}% ${completedPercentage + attendedPercentage}%,
              ${stats[2].color} ${completedPercentage + attendedPercentage}% 100%
            )`,
          }}
        ></div>

        <div className="absolute w-28 h-28 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md border border-gray-200 dark:border-gray-700">
        </div>

        <div className="absolute flex flex-col items-center">
          <div className="text-2xl font-bold dark:text-white">320 XP</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Total XP</div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-1">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-all duration-200">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: stat.color }}
              ></div>
              <span className="text-sm font-medium dark:text-white">{stat.label}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Progress summary */}
      <div className="mt-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Overall Progress</p>
            <p className="text-2xl font-bold text-gray-800">65%</p>
          </div>
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm">
            <FaTrophy className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
