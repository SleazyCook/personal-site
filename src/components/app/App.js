import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>

      <Navbar />

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