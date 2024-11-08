import React from 'react';
import { FaTimes } from 'react-icons/fa';
import SocialAuthButtons from './SocialAuthButtons';
import AuthForm from './AuthForm';

function AuthModal({ isOpen, type, onClose, onToggleAuthType }) {
  if (!isOpen) return null;

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {type === 'login' ? 'Welcome Back!' : 'Join Aura Tracker'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {type === 'login' ? 'Log in to continue' : 'Create an account to get started'}
          </p>
        </div>

        <AuthForm type={type} />

        {/* Divider */}
        <div className="my-4 flex items-center">
          <span className="border-t border-gray-300 flex-grow dark:border-gray-600"></span>
          <span className="px-3 text-gray-500 dark:text-gray-400 text-sm">or</span>
          <span className="border-t border-gray-300 flex-grow dark:border-gray-600"></span>
        </div>

        <SocialAuthButtons onSocialLogin={handleSocialLogin} />

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {type === 'login' ? (
            <>
              Don’t have an account?{' '}
              <button
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
                onClick={onToggleAuthType} >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
                onClick={onToggleAuthType} 
              >
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
