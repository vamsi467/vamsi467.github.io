// Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 mt-2 text-sm font-medium text-left text-gray-500 transition-colors duration-200 transform rounded-md dark:text-gray-400 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
      >
        ☰
      </button>
      {isOpen && (
        <div className="mt-2">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-200 rounded-full">
            {/* Replace with your image */}
            <img
              className="w-10 h-10 rounded-full"
              src="path_to_your_profile_image.jpg"
              alt="Profile"
            />
          </div>
          <div className="mt-4">
            <Link to="/" className="block px-4 py-2 text-sm">Bio</Link>
            <Link to="/skills" className="block px-4 py-2 text-sm">Skills</Link>
            {/* ... add other navigation links */}
          </div>
          <div className="mt-4">
            <a href="https://www.github.com/your_username" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm">LinkedIn</a>
            {/* ... add other social links */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
