import { useState } from 'react';
import { FiPlus, FiCalendar, FiTag, FiFlag } from 'react-icons/fi';

const TodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState({
    title: '',
    category: 'Personal',
    priority: 'Medium',
    dueDate: '',
  });

  const categories = [
    'Personal', 'Work', 'Health', 'Shopping', 
    'Finance', 'Family', 'Learning', 'Projects'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.title.trim()) return;
    
    onAdd({
      ...todo,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    });
    
    setTodo({
      title: '',
      category: 'Personal',
      priority: 'Medium',
      dueDate: '',
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <input
              type="text"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
              placeholder="What needs to be done?"
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-gray-800 transition-all pl-4 text-lg dark:text-white"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">
                <FiTag />
              </div>
              <select
                value={todo.category}
                onChange={(e) => setTodo({ ...todo, category: e.target.value })}
                className="w-full p-3 pl-10 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer dark:text-white"
              >
                {categories.map(cat => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">
                <FiFlag />
              </div>
              <select
                value={todo.priority}
                onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
                className="w-full p-3 pl-10 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer dark:text-white"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">
                <FiCalendar />
              </div>
              <input
                type="date"
                value={todo.dueDate}
                onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
                className="w-full p-3 pl-10 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="md:w-auto w-full bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium shadow-sm hover:shadow-md"
            >
              <FiPlus className="text-lg" />
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
