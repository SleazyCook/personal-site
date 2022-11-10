import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <header className="text-center">
        <h1 className='text-3xl font-serif'><a href="https://developedbydrewford.netlify.app">
          <span>Developed by </span>
          <span className='font-swash'>Drewford</span>
          <br />
          <span className='text-lg overline'>Andrew Cook - Web Developer</span>
        </a></h1>
      </header> */}

      {/* nav bar on top somehow on desktop, media query to under header on mobile */}
      <Navbar />
      {/* <br />
      <br /> */}
      <Outlet context />

      <section id="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> 
      </section>


    </div>
  )
}

export default App;