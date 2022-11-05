import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <br />
      <nav>
        <Link to="/portfolio">Passion</Link>
        <Link to="/games">Games</Link>
        <Link to="/school">School</Link>
        <Link to="/work">Work</Link>
      </nav>
      {/* Project Section */}
      <div className="projects">
        {/* Movie Mayhem */}
        <div className="project">
          <p>
            Movie Mayhem
            <br />
            Join a community of movie and television lovers at Movie Mayhem. Similar to the social film discovery website Letterboxd, discover and track your watchlist and participate in watchparties and discussions posted throughout the year. 
            <br />
            <a href="https://moviemayhem.netlify.app" target="_blank">Join the Mayhem!</a>
          </p>
        </div>
        {/* Beyond the Book */}
        <div className="project">
          <p>
            Beyond the Book
            <br />
            Join a community of book lovers at Beyond the Book. Similar to the social reading discovery website Goodreads, discover and track your reading list and participate in bookclubs and discussions posted throughout the year.
            <br />
            <a href="https://beyondthebook.netlify.app" target="_blank">Reach Beyond the Book!</a>
          </p>
        </div>
        {/* D&D */}
        <div className="project">
          <p>
            Untitled D&D Project: <i>Coming Soon!</i>
            <br />
            A comprehensive wiki of your own personal D&D campaign! Create entries for your locations, characters, maps, and more and invite your players to keep their own detailed notes on all of the goings-on in their adventures. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;