import React from 'react';
import {Link} from 'react-router-dom';

const ProjectNav = () => {
  return (
    <div>
      <nav className="text-center space-x-4">
        <Link to="/portfolio">Websites</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/freelance">Freelance</Link>
      </nav>
    </div>

  )
}

export default ProjectNav;