import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Bio from './pages/Bio';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contributions from './pages/Contributions';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App flex">
        <Sidebar />
        <div className="flex-1 p-4">
        <Routes >
          <Route path="/" exact component={Bio} />
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
          <Route path="/education" component={Education} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/blog" component={Blog} />
          <Route path="/contributions" component={Contributions} />
          <Route path="/awards" component={Awards} />
          <Route path="/contact" component={Contact} />
        </Routes >
      </div>
      </div>
    </Router>
  );
}

export default App;
