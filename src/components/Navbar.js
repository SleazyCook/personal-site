import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="main-nav">
        <Link to="/" className="nav-item">Home</Link>

        <Link to="about" className="nav-item">About</Link>

        <Link to="portfolio" className="nav-item">Portfolio</Link>

  </nav>
  )

}

export default Navbar;