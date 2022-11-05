import React from 'react';
import {Link} from 'react-router-dom';

const Work = () => {
  return (
    <div>
      <nav>
        <Link to="/portfolio">Passion</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/work">Work</Link>
      </nav>
      <p>
        Freelance work goes here.
      </p>
    </div>
  )
}

export default Work;