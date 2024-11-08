import React, { useState, useEffect } from 'react';
import Navbar from '../components/Home/Navbar';
import Content from '../components/Home/Content';
import AuthModal from '../components/Home/AuthModal';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'login',
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const openModal = (type) => {
    setModalState({
      isOpen: true,
      type,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: modalState.type,
    });
  };

  const toggleAuthType = () => {
    setModalState({
      isOpen: true,
      type: modalState.type === 'login' ? 'register' : 'login',
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="h-screen bg-white dark:bg-gray-900 transition-colors duration-200 w-full">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} openModal={openModal} />
      <Content />
      <AuthModal 
        isOpen={modalState.isOpen} 
        type={modalState.type} 
        onClose={closeModal} 
        onToggleAuthType={toggleAuthType} 
      />
    </div>
  );
}

export default Home;
