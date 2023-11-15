
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from './components/Sidebar';
import MainContent from './components/Maincontent';
import Awards from './pages/Awards';
import Bio from './pages/Bio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Contributions from './pages/Contributions';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<'over' | 'push' | 'side'>('over');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const appClass = `flex ${sidebarOpen && mode === 'push' ? 'ml-64' : ''}`;

  return (
    <Router>
    <div className={appClass}>
      <Sidebar isOpen={sidebarOpen} mode={mode} toggleSidebar={toggleSidebar} />
      <MainContent>
        <button className="p-2 text-xl text-gray-700" onClick={toggleSidebar}>
          <AiOutlineMenu />
        </button>
        <Routes >
            <Route path="/"  Component={Bio} />
            <Route path="/skills" Component={Skills} />
            <Route path="/experience" Component={Experience} />
            <Route path="/projects" Component={Projects} />
            <Route path="/education" Component={Education} />
            <Route path="/testimonials" Component={Testimonials} />
            <Route path="/blog" Component={Blog} />
            <Route path="/contributions" Component={Contributions} />
            <Route path="/awards" Component={Awards} />
            <Route path="/contact" Component={Contact} />
          </Routes >
      </MainContent>
    </div>
    </Router>
  );
};

export default App;

