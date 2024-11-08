import React from 'react';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';

function SocialAuthButtons({ onSocialLogin }) {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={() => onSocialLogin('google')}
        className="p-2 rounded-full bg-slate-300 hover:bg-blue-200 dark:hover:bg-gray-700"
      >
        <FaGoogle className="w-5 h-5 text-gray-600  dark:text-gray-100" />
      </button>

      <button
        onClick={() => onSocialLogin('facebook')}
        className="p-2 rounded-full bg-blue-600 hover:bg-blue-500"
      >
        <FaFacebook className="w-5 h-5 text-white" />
      </button>

      <button
        onClick={() => onSocialLogin('github')}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
      >
        <FaGithub className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default SocialAuthButtons;
