import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <header>
        <h1>Developed by Drewford</h1>
      </header>
      <Navbar />
      <Outlet context />
      <div id="discord-link">
        <a href="https://discord.gg/SAgrmBXjeV" target="_blank"><img alt="discord-link" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png" height="50" width="50"></img></a>
      </div>
      <footer>
        <p>
          Developed by
          <span id="author"> Drewford</span>
        </p>
      </footer>
    </div>
  )
}

export default App;