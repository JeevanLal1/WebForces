import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import { useState } from 'react'
import ToDoList from '../components/TodoList/ToDolist'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem } from '../Redux/Slices/navSlice'

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);
  
  const dispatch=useDispatch();

  const handleTodoListClick = () => {
    dispatch(setActiveItem("ToDoList")); 
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const activeItem = useSelector((state) => state.navigation.activeItem); 
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <Dashboard onTodoListClick={handleTodoListClick} />;
      case 'ToDoList':
        return <ToDoList/>;
      default:
        return <Dashboard onTodoListClick={handleTodoListClick}/>; 
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-dark-lighter">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-dark-lighter p-4">
          <div className="max-w-7xl mx-auto">
          {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home