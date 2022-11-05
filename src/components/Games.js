import React from 'react';
import {Link} from 'react-router-dom';

const Games = () => {
  return (
    <div>
      <br />
      <nav>
        <Link to="/portfolio">Passion</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/work">Work</Link>
      </nav>
      {/* Project Section */}
      <div className="projects">
        {/* PIXELATE */}
        <div className="project">
          <p>
            Pixelate
            <br />
            Add rows and choose from 12 different colors to create your own pixel art. 
            <br />
            <a href="https://pixel8game.netlify.app" target="_blank">Click here to play now!</a>
          </p>
        </div>
        {/* CONNECT FOUR */}
        <div className="project">
          <p>
            Connect 4
            <br />
            Connect-Four is a tic-tac-toe-like two-player game in which players alternately place pieces on a vertical board 7 columns across and 6 rows high.
            <br />
            <a href="https://connect4bydrewford.netlify.app" target="_blank">Click here to play now!</a>
          </p>
        </div>
        {/* DEATH HOUSE */}
        <div className="project">
          <p>
            Curse of Strahd: Durst Manor
            <br />
            A multiple choice adventure game based on the introduction to the popular Curse of Strahd campagin setting from Dungeons and Dragons. To start you will choose a character ability: Strength, Dexterity, Charisma, or Luck. Use your ability to navigate through Durst Manor to uncover the truth and get out alive!
            <br />
            <a href="https://death-house.netlify.app" target="_blank">Click here to play now!</a>
          </p>
        </div>
        {/* Puppy Clicker */}
        <div>
          <p>
            Puppy Clicker
            <br />
            A cute incremental, or clicker, game with a puppy theme! Click or tap the puppy icon to start building resources and use those resources to purchase passive producers until you have a ridiculous amount of puppies!
            <br />
            <a href="https://puppy-clicker.netlify.app" target="_blank">Click here to play now!</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Games;