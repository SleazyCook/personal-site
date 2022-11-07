import React from 'react';

const About = () => {
  return (
    <div className="about-container">

      Fullstack Academy graduate  seeking first full-time position as a developer
      <br />
      <p id="skills">Skills</p>
      <div className="languages">
        <div className="language">
          HTML
          <img alt="html icon" src="https://img.icons8.com/color/344/html-5--v1.png" height="100" width="100"></img>
        </div>

        <div className="language">
          CSS
          <img alt="css icon" src="https://img.icons8.com/color/344/css3.png" height="100" width="100"></img>
        </div>

        <div className="language">
        JavaScript
          <img alt="javascript icon" src="https://img.icons8.com/color/344/javascript--v2.png" height="100" width="100"></img>
        </div>

        <div className="language">
          Git
          <img alt="git icon" src="https://img.icons8.com/color/344/git.png" height="100" width="100"></img>
        </div>

        <div className="language">
        React.js
          <img alt="react icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="100" width="100"></img>
        </div>

        <div className="language">
        Express.js
          <img alt="express icon" src="https://www.mementotech.in/assets/images/icons/express.png" height="100" width="100"></img>
        </div>

        <div className="language">
          Node.js
          <img alt="node icon" src="https://cdn-icons-png.flaticon.com/128/5968/5968322.png" height="100" width="100"></img>
        </div>

        <div className="language">
          PostgreSQL
          <img alt="post gres Q L icon" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" height="100" width="100"></img>
        </div>

      </div>
      <p>CERTS FROM </p>
      <p>Fullstack Academy</p>
      <p>codecademy</p>
      <p>udemy</p>
      <p>freeCodeCamp</p>
    </div>
  )
}

export default About;