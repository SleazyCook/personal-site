import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="main-nav">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="portfolio">Portfolio</Link>
  </nav>
  )

}

export default Navbar;