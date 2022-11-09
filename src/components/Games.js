import React from 'react';

const Games = () => {
  return (
    <div>
      <br />
      <br />
      {/* Project Section */}
      <div className="max-w-[600px] mx-auto">
        {/* DEATH HOUSE */}
        <div className="project">
          <div className="project-title">
            Curse of Strahd: Durst Manor
          </div>
          <div className="project-description">
            A multiple choice adventure game based on the introduction to the popular Curse of Strahd campagin setting from Dungeons and Dragons. To start you will choose a character ability: Strength, Dexterity, Charisma, or Luck. Use your ability to navigate through Durst Manor to uncover the truth and get out alive!
            <br />
            <a href="https://death-house.netlify.app" target="_blank">Click here to play now!</a>
          </div>
        </div>
        {/* CONNECT FOUR */}
        <div className="project">
          <div className="project-title">
            Connect 4
          </div>
          <div className="project-description">
            Connect-Four is a tic-tac-toe-like two-player game in which players alternately place pieces on a vertical board 7 columns across and 6 rows high.
            <br />
            <a href="https://connect4bydrewford.netlify.app" target="_blank">Click here to play now!</a>
          </div>
        </div>
        {/* PIXELATE */}
        <div className="project">
          <div className="project-title">
            Pixelate
          </div>
          <div className="project-description">
          Add rows and choose from 12 different colors to create your own pixel art. 
          <br />
          <a href="https://pixel8game.netlify.app" target="_blank">Click here to play now!</a>
          </div>
        </div>
        {/* Puppy Clicker */}
        <div className="project">
          <div className="project-title">
            Puppy Clicker
          </div>
          <div className="project-description">
            A cute incremental, or clicker, game with a puppy theme! Click or tap the puppy icon to start building resources and use those resources to purchase passive producers until you have a ridiculous amount of puppies!
            <br />
            <a href="https://puppy-clicker.netlify.app" target="_blank">Click here to play now!</a>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Games;