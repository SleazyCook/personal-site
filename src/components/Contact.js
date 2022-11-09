import React from 'react';
import AboutNav from './AboutNav';
import ContactDetails from './ContactDetails';
import Story from './About';

const Contact = () => {
  return (
    <div>

      <br />

      {/* media query where Contact is on side on desktop / on top when on mobile */}
      <p className='text-center text-2xl'>Contact</p>
      <ContactDetails />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <br />
      <p className='text-center text-2xl'>Story</p>
      <Story /> */}
    </div>
  )
}

export default Contact;