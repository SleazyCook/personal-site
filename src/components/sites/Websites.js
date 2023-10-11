import React from 'react';
import Footer from '../app/Footer';
import {websiteData} from "./WebsiteData";

// React Icons
import { FaUserAstronaut } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs'

const Websites = () => {
  return (
    <div className="mx-10">

      <div className="max-w-[600px] mx-auto mt-10 text-center">

        {websiteData.map((websiteObj) => {
          return (
            <div key='websiteObj.id'>
              <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href={websiteObj.link} target="_blank">
                {websiteObj.name} </a></p>

              <p className="text-center">
                {websiteObj.group ?  <> <span className='inline-block'><HiUserGroup /></span> Group project </> : <><span className='inline-block'><FaUserAstronaut /></span> Solo project</>}
                &nbsp;| &nbsp;
                <a 
                  href={websiteObj.github} target="_blank"
                  className="transition-all ease-in hover:text-gray-500">
                    <span className='inline-block'><BsGithub /></span> GitHub</a>
              </p>

              <p>{websiteObj.description}
                <span className=" block text-center text-sm text-gray-500 overline">
                  {websiteObj.stack} </span>
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