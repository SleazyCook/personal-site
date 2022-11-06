import React from 'react';
import ProjectNav from './ProjectNav';

const Portfolio = () => {
  return (
    <div>
      <br />
      <ProjectNav />
      {/* Project Section */}
      <div className="projects">
        {/* Movie Mayhem */}
        <div className="project">
          <div className="project-title">
            Movie Mayhem
          </div>
          <div className="project-description">
            Join a community of movie and television lovers at Movie Mayhem. Similar to the social film discovery website Letterboxd, discover and track your watchlist and participate in watchparties and discussions posted throughout the year. 
            <br />
            <a href="https://moviemayhem.netlify.app" target="_blank">Join the Mayhem!</a>
          </div>
        </div>
        {/* Beyond the Book */}
        <div className="project">
          <div className="project-title">
            Beyond the Book
          </div>
          <div className="project-description">
            Join a community of book lovers at Beyond the Book. Similar to the social reading discovery website Goodreads, discover and track your reading list and participate in bookclubs and discussions posted throughout the year.
            <br />
            <a href="https://beyondthebook.netlify.app" target="_blank">Reach Beyond the Book!</a>
          </div>
        </div>
        {/* D&D */}
        <div className="project">
          <div className="project-title">
            Unititled D&D Project: <i>Coming Soon!</i>
          </div>
          <div className="project-description">
            A comprehensive wiki of your own personal D&D campaign! Create entries for your locations, characters, maps, and more and invite your players to keep their own detailed notes on all of the goings-on in their adventures. 
          </div>
        </div>
        {/* Homestead List */}
        <div className="project">
          <div className="project-title">
            Homestead list: <i>Coming Soon!</i>
          </div>
          <div className="project-description">
            Buy, Sell, or Trade with neighbors you already know in the Houston Gardens area. A Craigslist-clone specifically for a neighborhood in Houston, Texas.
            <br />
            <a href="https://homesteadlist.netlify.app" target="_blank">Click here to see this project</a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;