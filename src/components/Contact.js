import React from 'react';
import AboutNav from './AboutNav';
import ContactDetails from './ContactDetails';
import Story from './Story';

const Contact = () => {
  return (
    <div>

      <br />
      <AboutNav />
      <br />

      {/* media query where Contact is on side on desktop / on top when on mobile */}
      <p className='text-center text-2xl'>Contact</p>
      <ContactDetails />

      <br />
      <p className='text-center text-2xl'>Story</p>
      <Story />
    </div>
  )
}

export default Contact;