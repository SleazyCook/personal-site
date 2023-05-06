import React from 'react';
import Preview from './Preview';
import Footer from '../app/Footer';

const Home = () => {
  return (
    <div id="home-container" className="bg-black ">
      <br />
      <br />
      <br />
      {/* <div className="text-center text-2xl ">
        There is art and beauty and power 
        <br />
        in the primal images of fantasy
        <br />
        - Guillermo del Toro
      </div> */}
      <img className="mx-auto" alt="del toro quote" src="https://i.imgur.com/vxhBtD8.png"></img>
      
      {/* <br /> */}
      <br />

      <div className="flex justify-center">
        <Preview/>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Footer />

      <br />
      <br />


    </div>
  )
}

export default Home;