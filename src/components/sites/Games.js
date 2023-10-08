import React from 'react';
import Footer from '../app/Footer';
import {gamesData} from './GamesData';

const Games = () => {
  return (
    <div className="mx-10">
      <br />
      <br />
      {/* Project Section */}
      <div className="max-w-[600px] mx-auto text-center">

        {gamesData.map((gameObj) => {
          return (
            <div key={gameObj.id}>
              <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href={gameObj.link} target="_blank">
            {gameObj.name}</a></p>

            <p className="text-center">
              {gameObj.group ?  <>  Group project </> : <>Solo project</>}
              &nbsp;| &nbsp;
              <a 
                href={gameObj.github} target="_blank"
                className="transition-all ease-in hover:text-gray-500">
                  GitHub</a>
            </p>

            <p>{gameObj.description}
              <br />
              <span className="block text-center text-sm text-gray-500 overline">
                {gameObj.stack}
              </span>
            <br />
          </p>

            </div>
          )
        })}

      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Games;