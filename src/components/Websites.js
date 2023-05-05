import React from 'react';
import Footer from './Footer';
import {websiteData} from "./WebsiteData";

import {FaUserAstronaut} from 'react-icons/fa';
import {HiUserGroup} from 'react-icons/hi';
import {BsGithub} from 'react-icons/bs'

const Websites = () => {
  return (
    <div className="mx-10">
      <br />
      <br />
      <div className="max-w-[600px] mx-auto text-center">

        {websiteData.map((websiteObj) => {
          return (
            <div>
              <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href={websiteObj.link} target="_blank">
            {websiteObj.name} </a></p>

            <p className="text-center">
              {websiteObj.group ?  <>  Group project </> : <>Solo project</>}
              &nbsp;| &nbsp;
              <a 
                href={websiteObj.github} target="_blank"
                className="transition-all ease-in hover:text-gray-500">
                  GitHub</a>
              {/* <span className="text-xl"><BsGithub /></span> */}
              
            </p>

            <p>{websiteObj.description}
              <br />
              <p className="text-center text-sm text-gray-500 overline">
                {websiteObj.stack} </p>
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

export default Websites;