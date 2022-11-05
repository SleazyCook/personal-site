import React from 'react';
import {Link} from 'react-router-dom';

const School = () => {
  return (
    <div>
      <br />
      <nav>
        <Link to="/portfolio">Passion</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/work">Work</Link>
      </nav>
      <p>
        Projects from my Fullstack Web Development course at Fullstack Academy:
      </p>
      {/* Project Section */}
      <div className="projects">
        {/* Drewford's List */}
        <div className="project">
          <p>
            Drewford's list
            <br />
            Craigslist-clone made up a community of fellow cohorts practicing with front-end CRUD methods for a pre-built API.
            <br />
            <a href="https://drewfordslist.netlify.app" target="_blank">Click here to see this project</a>
          </p>
        </div>
        {/* Puppy Bowl */}
        <div className="project">
          <p>
            Puppy Bowl
            <br />
            My introduction to react.js, react-router, and front-end work with an API. 
            <br />
            <a href="https://puppybowlbydrewford.netlify.app" target="_blank">Click here to see this project</a>
          </p>
        </div>
        {/* Wizard News */}
        <div className="project">
          <p>
            Wizard News
            <br />
            First project using Express.js working through a guided project with a team. 
            <br />
            <a href="https://wizardnewswithpnd.fly.dev" target="_blank">Click here to see this project</a>
          </p>
        </div>
        {/* First personal site */}
        <div className="project">
          <p>
            Personal Site
            <br />
            My first personal website using only HTML and CSS.
            <br />
            <a href="https://drews-first-site.netlify.app/index.html" target="_blank">Click here to see this project</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default School;