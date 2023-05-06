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
            <div>
              <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href={gameObj.link} target="_blank">
            {gameObj.name}</a></p>

            <p className="text-center">
              {gameObj.group ?  <>  Group project </> : <>Solo project</>}
              &nbsp;| &nbsp;
              <a 
                href={gameObj.github} target="_blank"
                className="transition-all ease-in hover:text-gray-500">
                  GitHub</a>
              {/* <span className="text-xl"><BsGithub /></span> */}
            </p>

            <p>{gameObj.description}
            <br />
            <p className="text-center text-sm text-gray-500 overline">
              {gameObj.stack}
            </p>
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