import { FaCalendarAlt, FaCheckSquare, FaBook } from 'react-icons/fa';

function QuickAccess({onTodoListClick}) {
  return (
    <div className="p-6 flex flex-col items-center justify-center w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Quick Access</h2>
      
      <div className="mt-8 mb-8 space-y-8 w-full">
        {/* Calendar */}
        <button 
          className="w-full group flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaCalendarAlt className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
          <span className="flex-1 text-left text-lg font-semibold">Go to Calendar</span>
          <span className="text-blue-200 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>

        {/* To-Do List */}
        <button 
          className="w-full group flex items-center p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white transition-all duration-300 hover:from-purple-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onClick={onTodoListClick}
        >
          <FaCheckSquare className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
          <span className="flex-1 text-left text-lg font-semibold">Open To-Do List</span>
          <span className="text-purple-200 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>

        {/* Assignments */}
        <button 
          className="w-full group flex items-center p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <FaBook className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
          <span className="flex-1 text-left text-lg font-semibold">Assignments</span>
          <span className="text-green-200 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">Access your daily academic and campus tools with one click</p>
      </div>
    </div>
  );
}

export default QuickAccess;
