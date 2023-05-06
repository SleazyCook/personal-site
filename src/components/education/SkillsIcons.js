import React, {useState} from 'react';
import {iconsData} from './SkillsIconsData';

const SkillsIcons = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const normalSkillsContainer = "flex flex-wrap justify-center";

  // const hoverSkillsContainer = "flex flex-wrap justify-between";

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // }

  return (
    <div>
      {/* <div className={ isClicked ? hoverSkillsContainer : normalSkillsContainer} onClick={handleClick}> */}
      <div className="flex flex-wrap max-h-[600px] justify-center md:flex-col mx-25">

        {iconsData.map((iconsObj) => {
          return (
            <div className="flex flex-col self-center">
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