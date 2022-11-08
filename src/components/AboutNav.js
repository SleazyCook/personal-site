import React from 'react';
import {Link} from 'react-router-dom';

const AboutNav = () => {
  return (
    <nav>
      <div>
      <nav className="text-center space-x-4">
        <Link to="/about">Skills & Certificates</Link>
        <Link to="/story">Contact & My Story</Link>
      </nav>
    </div>
    </nav>
  )
}

export default AboutNav;