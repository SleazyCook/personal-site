import React from 'react';
import Footer from './Footer';

const Websites = () => {
  return (
    <div className="mx-10">
      <br />
      <br />
      <div className="max-w-[600px] mx-auto text-center">

        {/* Delavega Autoplex */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://delavegaautoplex.netlify.app" target="_blank">
            Delavega Autoplex</a></p>
          <p>
            Business site for car dealership in McAllen, TX. Learn about Delavega Autoplex's local history and inventory of cars, SUVs, and trucks. Read testimonials from verified purchasers, reach out directly to the owners, and manage your payments and payment history.
            <br />
            <p className="text-center text-sm text-gray-500 overline">
              React.js v6 | CSS </p>
            <br />
          </p>
        </div>

        {/* Victor Alberto Photography */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://victoralbertophotography.netlify.app/" target="_blank">
            Victor Alberto Photography</a></p>
          <p>
            Photoraphy and Videography services by Victor Alberto Torres. Check out a gallery of previous works on weddings, engagements, graduation, landscapes, real estate, creative, wildlife, and nature. Book a session today or just order some digital or physical prints. 
            <br />
            <p className="text-center text-sm text-gray-500 overline">
              React.js v6 | CSS </p>
            <br />
          </p>
        </div>

        {/* Movie Mayhem */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://moviemayhem.netlify.app" target="_blank">
            Movie Mayhem</a></p>
          <p>
            Join a community of movie and television lovers at Movie Mayhem. Similar to the social film discovery website Letterboxd, discover and track your watchlist and participate in watchparties and discussions posted throughout the year. 
            <br />
            <p className="text-center text-sm text-gray-500 overline">
              React.js v6 | CSS | Express.js | PostgreSQL</p>
            <br />
          </p>
        </div>

        {/* Beyond the Book */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://beyondthebook.netlify.app" target="_blank">
            Beyond the Book</a></p>
          <p>
            Join a community of book lovers at Beyond the Book. Similar to the social reading discovery website Goodreads, discover and track your reading list and participate in bookclubs and discussions posted throughout the year.
            <br />
            <p className="text-center text-sm transition-all ease-in text-gray-500 overline">
              React.js v6 | CSS | Express.js | PostgreSQL</p>
            <br />
          </p>
        </div>

        {/* Drewford's List */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://drewfordslist.netlify.app" target="_blank">
            Drewford's List</a></p>
          <p>
            A school project experimenting with Front End fetch requests to create, read, update, and destroy data from a premade database. This website was eventually led to the Homestead List, seen above, which is used by a community in Houston, TX.
            <br />
            <p className="text-center text-sm text-gray-500 overline">
              React.js v6 | CSS</p>
            <br />
          </p>
        </div>

        {/* Homestead List */}
        <div>
          <p className="text-center text-xl transition-all ease-in hover:text-gray-500"><a href="https://homesteadlist.netlify.app" target="_blank">
            Homestead list: <span className="italic no-underline">Coming Soon!</span></a></p>
          <p>
            Buy, Sell, or Trade with neighbors you already know in the Houston Gardens area. A Craigslist-clone specifically for a neighborhood in Houston, Texas.
            <br />
            <p className="text-center text-sm text-gray-500 overline">
              React.js v6 | CSS</p>
            <br />
            
          </p>
        </div>


        {/* D&D */}
        <div>
          <p className="text-center text-xl">
            Unititled D&D Project: <span className="italic no-underline">Coming Soon!</span></p>
          <p>
            A comprehensive wiki of your own personal D&D campaign! Create entries for your locations, characters, maps, and more and invite your players to keep their own detailed notes on all of the goings-on in their adventures. 
            <br />
            <p className="text-center text-sm"></p>
          </p>
        </div>


      </div>

      <br />
      <Footer />
    </div>
  )
}

export default Websites;