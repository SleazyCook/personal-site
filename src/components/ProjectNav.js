import React from 'react';
import {Link} from 'react-router-dom';

const ProjectNav = () => {
  return (
    <nav id="project-nav">
      <Link to="/portfolio">Websites</Link>
      <Link to="/games">Games</Link>
      <Link to="/school">School</Link>
      <Link to="/work">Freelance</Link>
  </nav>
  )
}

export default ProjectNav;