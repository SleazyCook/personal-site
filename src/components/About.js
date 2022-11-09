import React from 'react';
import AboutNav from './AboutNav';
import Skills from './Skills';
import Certs from './Certs';

const About = () => {
  return (
    <div>
      <br />
      <AboutNav />

      <br />
      <div id="flex-container" className="flex flex-col md:flex-row md:justify-center">
        {/* flex item toprow/leftcol */}
        <div >
          <p className='text-center text-2xl underline'>Skills</p>
          <Skills clasName="flex" />
        </div>
        
        <br />

        {/* flex item bottomrow/rightcol */}
        <div className="ml-5 mr-13">
          <p className='text-center text-2xl underline'>Certifications</p>
          <Certs />
        </div>
      </div>


    </div>
  )
}

export default About;