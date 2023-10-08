import React, {useState} from 'react';
import {iconsData} from './SkillsIconsData';

const SkillsIcons = () => {

  return (
    <div>
      <div className="flex flex-wrap max-h-[600px] justify-center md:flex-col mx-25">

        {iconsData.map((iconsObj) => {
          return (
            <div key={iconsObj.id} className="flex flex-col self-center">
              <p className="self-center">
                {iconsObj.name}
              </p>
              <img className="self-center h-[80px] w-[80px]" alt="html icon" src={iconsObj.link}></img>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default SkillsIcons;