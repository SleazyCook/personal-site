import React from 'react';
import Footer from '../app/Footer';
import {gamesData} from './GamesData';

// React Icons
import { FaUserAstronaut } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs'

const Games = () => {
  return (
    <div className="mx-10">

      {/* Project Section */}
      <div className="max-w-[600px] mx-auto mt-10 text-center">

        {gamesData.map((gameObj) => {
          return (
            <div key={gameObj.id}>
              <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href={gameObj.link} target="_blank">
            {gameObj.name}</a></p>

            <p className="text-center">
              {gameObj.group ?  <><span className='inline-block'><HiUserGroup /></span>  Group project </> : <><span className='inline-block'><FaUserAstronaut /></span> Solo project</>}
              &nbsp;| &nbsp;
              <a 
                href={gameObj.github} target="_blank"
                className="transition-all ease-in hover:text-gray-500">
                  <span className='inline-block'><BsGithub /></span> GitHub</a>
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

      <Footer />
    </div>
  )
}

export default Games;