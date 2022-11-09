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

      <Outlet context classname="bg-black"/>

      <br />

      <footer className="text-center text-sm ">
        Built using React.js v6 and Tailwind CSS and hosted on Netlify.
        <br />
        <span className='font-serif'> Developed by</span>
        <span className='font-swash'> Drewford</span>
      </footer>

      {/* Social Links */}
      <div className="flex justify-center">
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/andrew-cook-271544205/" target="_blank"><img alt="linked in icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="35" width="35"></img></a>
        {/* spacer */}
        &nbsp;
        {/* Discord Link */}
        <a href="https://discord.gg/SAgrmBXjeV" target="_blank"><img alt="discord icon" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png" height="35" width="35"></img></a>
        &nbsp;
        {/* Code Wars Link */}
        <a href="https://www.codewars.com/users/sleazycook" target="_blank"><img alt="code wars icon" src="https://www.codewars.com/packs/assets/logo.61192cf7.svg" heigh="35" width="35"></img></a>
      </div>

    </div>
  )
}

export default App;