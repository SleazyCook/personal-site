import React from 'react';
import AboutNav from './AboutNav';
import Contact from './Contact';

const Story = () => {
  return (
    <div>

      <br />
      <AboutNav />
      <br />

      {/* media query where Contact is on side on desktop / on top when on mobile */}
      <p className='text-center text-2xl'>Contact</p>
      <Contact />

      <br />
      <p className='text-center text-2xl'>Story</p>
      This is my story.
    </div>
  )
}

export default Story;