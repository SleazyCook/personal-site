import React from 'react';
import {Link} from 'react-router-dom';

const Games = () => {
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
        Games go here.
      </p>
    </div>
  )
}

export default Games;