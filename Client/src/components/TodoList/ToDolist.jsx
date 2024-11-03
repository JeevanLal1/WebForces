import { useState, useEffect } from 'react';
import TodoForm from './ToDoForm';
import TodoItem from './ToDoItem';
import { FiCheckCircle, FiList } from 'react-icons/fi';

function ToDoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Task Master
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Organize your life, achieve your goals
          </p>
        </div>

        <TodoForm onAdd={addTodo} />

        <div className="mt-12 space-y-8">
          {incompleteTodos.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FiList className="text-2xl text-primary" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Tasks</h2>
                <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-sm font-medium">
                  {incompleteTodos.length}
                </span>
              </div>
              <div className="grid gap-4">
                {incompleteTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            </section>
          )}

          {completedTodos.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <FiCheckCircle className="text-2xl text-green-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Completed Tasks</h2>
                <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-sm font-medium">
                  {completedTodos.length}
                </span>
              </div>
              <div className="grid gap-4">
                {completedTodos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                  />
                ))}
              </div>
            </section>
          )}

          {todos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FiList className="inline-block text-6xl" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No tasks yet</h3>
              <p className="text-gray-600 dark:text-gray-300">Add your first task to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
