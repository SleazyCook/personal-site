import React from 'react';
import ProjectNav from './ProjectNav';

const School = () => {
  return (
    <div>
      <br />
      <ProjectNav />
      <br />
      {/* <p>
        Projects from my Fullstack Web Development course at Fullstack Academy:
      </p> */}
      {/* Project Section */}
      <div className="projects">
        {/* Drewford's List */}
        <div className="project">
          <div className="project-title">
            Drewford's List
          </div>
          <div className="project-description">
            Craigslist-clone made up a community of fellow cohorts practicing with front-end CRUD methods for a pre-built API.
            <br />
            <a href="https://drewfordslist.netlify.app" target="_blank">Click here to see this project</a>
          </div>
        </div>
        {/* Puppy Bowl */}
        <div className="project">
          <div className="project-title">
            Puppy Bowl
          </div>
          <div className="project-description">
            My introduction to react.js, react-router, and front-end work with an API. 
            <br />
            <a href="https://puppybowlbydrewford.netlify.app" target="_blank">Click here to see this project</a>
          </div>
        </div>
        {/* Wizard News */}
        <div className="project">
          <div className="project-title">
            Wizard News
          </div>
          <div className="project-description">
            First project using Express.js working through a guided project with a team. 
            <br />
            <a href="https://wizardnewswithpnd.fly.dev" target="_blank">Click here to see this project</a>
          </div>
        </div>
        {/* First personal site */}
        <div className="project">
          <div className="project-title">
            Personal Site
          </div>
          <div className="project-description">
          My first personal website using only HTML and CSS.
            <br />
            <a href="https://drews-first-site.netlify.app/index.html" target="_blank">Click here to see this project</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default School;