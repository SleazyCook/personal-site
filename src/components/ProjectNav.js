import React from 'react';
import {Link} from 'react-router-dom';

const ProjectNav = () => {
  return (
    <nav>
      <Link to="/portfolio">Passion</Link>
      <Link to="/games">Games</Link>
      <Link to="/school">School</Link>
      <Link to="/work">Work</Link>
  </nav>
  )
}

export default ProjectNav;