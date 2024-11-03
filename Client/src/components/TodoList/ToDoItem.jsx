import { FiTrash2, FiCheck, FiCalendar, FiTag, FiFlag } from 'react-icons/fi';
import { formatDistanceToNow, isAfter, isBefore, format } from 'date-fns';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const priorityColors = {
    Low: 'bg-green-100 text-green-800 border-green-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    High: 'bg-red-100 text-red-800 border-red-200',
  };

  const categoryColors = {
    Personal: 'text-purple-600',
    Work: 'text-blue-600',
    Health: 'text-green-600',
    Shopping: 'text-pink-600',
    Finance: 'text-emerald-600',
    Family: 'text-orange-600',
    Learning: 'text-indigo-600',
    Projects: 'text-cyan-600',
  };

  const formatDueDate = (dueDate) => {
    const due = new Date(dueDate);
    const now = new Date();
    const isOverdue = isBefore(due, now);
    const formattedDate = format(due, 'MMM d');
    
    let statusClass = 'text-gray-500 dark:text-gray-400';
    if (isOverdue && !todo.completed) {
      statusClass = 'text-red-500 dark:text-red-400 font-medium';
    }

    const distance = formatDistanceToNow(due, { addSuffix: true });
    let friendlyDistance = distance
      .replace('about ', '')
      .replace('less than ', '')
      .replace('over ', '');

    if (isAfter(due, now)) {
      friendlyDistance = `Due ${formattedDate} (${friendlyDistance})`;
    } else {
      friendlyDistance = `${formattedDate} (${friendlyDistance})`;
    }

    return (
      <div className={`flex items-center gap-1 ${statusClass}`}>
        <FiCalendar className={isOverdue && !todo.completed ? 'text-red-400' : 'text-gray-400 dark:text-gray-300'} />
        <span>{friendlyDistance}</span>
      </div>
    );
  };

  return (
    <div className={`group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${
      todo.completed ? 'opacity-75' : ''
    }`}>
      <div className="p-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => onToggle(todo.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 dark:border-gray-600 hover:border-primary'
            }`}
          >
            {todo.completed && <FiCheck className="text-white" />}
          </button>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className={`font-medium ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                {todo.title}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
              <div className={`flex items-center gap-1 ${categoryColors[todo.category]} dark:text-white`}>
                <FiTag className="text-current" />
                <span>{todo.category}</span>
              </div>
              
              <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${priorityColors[todo.priority]} dark:border-transparent`}>
                <FiFlag className="text-current" />
                {todo.priority}
              </div>
              
              {todo.dueDate && formatDueDate(todo.dueDate)}
            </div>
          </div>
        </div>

        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
        >
          <FiTrash2 className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
