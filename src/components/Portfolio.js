import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <br />
      <nav>
        <Link to="/portfolio">Passion</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/work">Work</Link>
      </nav>
      <p>
        Passion Projects go here.
      </p>
    </div>
  )
}

export default Portfolio;