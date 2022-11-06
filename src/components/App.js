import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1><a href="https://developedbydrewford.netlify.app">Developed by <span id="header-author">Drewford</span></a></h1>
      </header>
      <Navbar />
      <Outlet context />
      <div id="social-icons">
        <br />
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/andrew-cook-271544205/" target="_blank"><img alt="linked in logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="50" wifth="50"></img></a>
        {/* spacer */}
        &nbsp;
        {/* Discord Link */}
        <a href="https://discord.gg/SAgrmBXjeV" target="_blank"><img alt="discord logo" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png" height="50" width="50"></img></a>
      </div>
      <footer>
        <br />
        Developed by
        <span id="author"> Drewford</span>
      </footer>
    </div>
  )
}

export default App;