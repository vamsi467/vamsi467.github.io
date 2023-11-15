import { Link } from 'react-router-dom';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface SidebarProps {
  isOpen: boolean;
  mode: 'over' | 'push' | 'side';
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, mode, toggleSidebar }) => {
  const sidebarClass = `fixed top-0 h-full bg-gray-800 transition-all duration-300 ${
    isOpen ? 'left-0' : '-left-64'
  } ${mode === 'side' ? 'relative' : ''}`;

  return (
    <div className={sidebarClass}>
      <button className="absolute top-4 right-4 text-white" onClick={toggleSidebar}>
        <AiOutlineClose />
      </button>
      {/* Profile Picture */}
      <div className="w-32 h-32 mb-lg border-4 border-white rounded-md overflow-hidden">
        <img src="https://avatars.githubusercontent.com/u/28139236?v=4" alt="Profile" className="w-full h-full" />
      </div>

      {/* Profile Name */}
      <h1 className="text-white text-xl mb-lg">Simone Olivia</h1>
      <nav>
        <ul className="space-y-md w-full">
        <li><Link to="/home" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">Home</Link></li>
        <li><Link to="/about-me" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">About Me</Link></li>
        <li><Link to="/what-i-do" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">What I Do</Link></li>
        <li><Link to="/resume" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">Resume</Link></li>
        <li><Link to="/portfolio" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">Portfolio</Link></li>
        <li><Link to="/testimonial" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">Testimonial</Link></li>
        <li><Link to="/contact" className="text-white block px-md py-sm hover:bg-secondary hover:text-primary rounded-md">Contact</Link></li>
      </ul>
      </nav>
    </div>
  );
};

export default Sidebar;


