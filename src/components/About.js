import React from 'react';
import Skills from './Skills';
import Story from './Story';
import AboutNav from './AboutNav';

const About = () => {
  return (
    <div className="about-container">
      <br />
      <AboutNav />

      <br />
      {/* <p className="text-center">
      Fullstack Academy graduate  seeking first full-time position as a developer
      </p>
      <br /> */}

      {/* media query where Skills is on side on desktop / on top when on mobile */}
      <p className='text-center text-2xl'>Skills</p>
      <Skills />

      <div>
        <p className='text-center text-2xl'>Certifications</p>
        <p>Fullstack Academy</p>
        <p>codecademy</p>
        <p>udemy</p>
        <p>freeCodeCamp</p>
      </div>



    </div>
  )
}

export default About;