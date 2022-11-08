import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-center space-x-4">
      
        <Link to="/" className="nav-item">Home</Link>

        <Link to="about" className="nav-item">About</Link>

        <Link to="portfolio" className="nav-item">Portfolio</Link>

  </nav>
  )

}

export default Navbar;