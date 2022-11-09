import React, {useState} from 'react';

const Skills = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const normalSkillsContainer = "flex flex-wrap justify-center";

  // const hoverSkillsContainer = "flex flex-wrap justify-between";

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // }

  return (
    <div>
      {/* <div className={ isClicked ? hoverSkillsContainer : normalSkillsContainer} onClick={handleClick}> */}
      <div className="flex flex-wrap justify-center md:flex-col md:align-center">
        <div className="flex flex-col md:self-center">
          <p className="self-center">
            HTML
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="html icon" src="https://img.icons8.com/color/344/html-5--v1.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            CSS
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="css icon" src="https://img.icons8.com/color/344/css3.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            JavaScript
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="javascript icon" src="https://img.icons8.com/color/344/javascript--v2.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            Git
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="git icon" src="https://img.icons8.com/color/344/git.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            Tailwind
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="tailwind css icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            React.js
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="react icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            Express.js
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="express icon" src="https://www.mementotech.in/assets/images/icons/express.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            Node.js
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="node icon" src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            SQL
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="SQL icon" src="https://cdn-icons-png.flaticon.com/512/2772/2772165.png"></img>
        </div>

        <div className="flex flex-col md:self-center">
          <p className="self-center">
            PostgreSQL
          </p>
          <img className="self-center h-[80px] w-[80px]" alt="post gres Q L icon" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"></img>
        </div>
      </div>
    </div>
  )
}

export default Skills;