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
        School projects go here.
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
            <a href="https://puppybowlbydrewford.netlify.app/about" target="_blank">Click here to see this project</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default School;