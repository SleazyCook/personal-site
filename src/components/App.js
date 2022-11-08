import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>

      <header className="text-center">
        <h1 className='text-3xl'><a href="https://developedbydrewford.netlify.app">Developed by <span className='font-swash'>Drewford</span></a></h1>
      </header>

      <Navbar />

      <Outlet context />

      <footer className="text-center">
        Built using React.js v6 and Tailwind CSS and hosted on Netlify.
        <br />
        Developed by
        <span id="author"> Drewford</span>
      </footer>

      {/* Social Links */}
      <div>
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/andrew-cook-271544205/" target="_blank"><img alt="linked in logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="50" width="50"></img></a>
        {/* spacer */}
        &nbsp;
        {/* Discord Link */}
        <a href="https://discord.gg/SAgrmBXjeV" target="_blank"><img alt="discord logo" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png" height="50" width="50"></img></a>
      </div>

    </div>
  )
}

export default App;