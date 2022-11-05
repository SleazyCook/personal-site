import React from 'react';
import {Link} from 'react-router-dom';

const School = () => {
  return (
    <div>
      <nav>
        <Link to="/portfolio">Passion</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/work">Work</Link>
      </nav>
      <p>
        School projects go here.
      </p>
    </div>
  )
}

export default School;