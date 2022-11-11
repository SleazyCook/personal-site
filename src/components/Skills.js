import React from 'react';
import SkillsIcons from './SkillsIcons';
import Certs from './Certs';
import Footer from './Footer';

const Skills = () => {
  return (
    <div className="mx-10">

      <br />
      <br />
      <div id="flex-container" className="flex flex-col md:flex-row md:justify-around lg:mx-[30%]">
        {/* flex item toprow/leftcol */}
        <div className="flex flex-col min-w-[200px]">
          <p className='text-2xl underline mx-auto'>Skills</p>
          <SkillsIcons />
        </div>
        


        {/* flex item bottomrow/rightcol */}
        <div className="ml-5 mr-13">
          <p className='text-center text-2xl underline'>Certifications</p>
          <Certs />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Skills;