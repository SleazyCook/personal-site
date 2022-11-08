import React from 'react';
import Skills from './Skills';
import Story from './Story';

const About = () => {
  return (
    <div className="about-container">

      <br />
      <p className="text-center">
      Fullstack Academy graduate  seeking first full-time position as a developer
      </p>
      <br />

      <p className='text-center text-2xl'>Skills</p>
      <Skills />

      <div>
        <p className='text-center text-2xl'>Certifications</p>
        <p>Fullstack Academy</p>
        <p>codecademy</p>
        <p>udemy</p>
        <p>freeCodeCamp</p>
      </div>

      <p className='text-center text-2xl'>Story</p>
      <Story />

    </div>
  )
}

export default About;