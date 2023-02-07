import React from 'react';
import Footer from './Footer';

const Games = () => {
  return (
    <div className="mx-10">
      <br />
      <br />
      {/* Project Section */}
      <div className="max-w-[600px] mx-auto text-center">

        {/* DEATH HOUSE */}
          <div>
            <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://death-house.netlify.app" target="_blank">
              Curse of Strahd: Durst Manor</a></p>
          <p>
            A multiple choice adventure game based on the introduction to the popular Curse of Strahd campagin setting from Dungeons and Dragons. To start you will choose a character ability: Strength, Dexterity, Charisma, or Luck. Use your ability to navigate through Durst Manor to uncover the truth and get out alive!
            <br />
            <p className="text-center text-sm text-gray-500 overline">HTML | CSS | JavaScript</p>
            <br />
          </p>
        </div>

        <br />

        {/* POKEMON PICKER */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://gotta-pick-em-all.netlify.app" target="_blank">
            Pokemon Picker</a></p>
          <p>
            Team project inspired by either.io, Pokemon Picker offers you the chance to rank your favorite pokemon by choosing between two randomly selected pokemon at a time.  Choose which generation you are interested in ranking and view your statistics based on wins, type, and generation. 
            <br />
            <p className="text-center text-sm text-gray-500 overline">React.js | CSS </p>
            <br />
          </p>
        </div>

        <br />
        {/* CONNECT FOUR */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://connect4bydrewford.netlify.app" target="_blank">
            Connect 4</a></p>
          <p>
            Connect-Four is a tic-tac-toe-like two-player game in which players alternately place pieces on a vertical board 7 columns across and 6 rows high.
            <br />
            <p className="text-center text-sm text-gray-500 overline">HTML | CSS | JavaScript</p>
            <br />
          </p>
        </div>

        <br />

        {/* PIXELATE */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://pixel8game.netlify.app" target="_blank">
            Pixelate</a></p>
          <p>
          Add rows and choose from 12 different colors to create your own pixel art. 
          <br />
          <p className="text-center text-sm text-gray-500 overline">HTML | CSS | JavaScript</p>
          <br />
          
          </p>
        </div>

        <br />

        {/* Puppy Clicker */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://puppy-clicker.netlify.app" target="_blank">
            Puppy Clicker</a></p>
          <p>
            A cute incremental, or clicker, game with a puppy theme! Click or tap the puppy icon to start building resources and use those resources to purchase passive producers until you have a ridiculous amount of puppies!
            <br />
            <p className="text-center text-sm text-gray-500 overline">HTML | CSS | JavaScript</p>
            <br />
            
          </p>
        </div>


      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Games;