import React from 'react';
import Preview from './Preview';
import Footer from '../app/Footer';

const Home = () => {
  return (
    <div id="home-container" className="bg-black h-[90svh]">

      <img className="pt-20 mx-auto" alt=" del toro quote" src="https://i.imgur.com/vxhBtD8.png"></img>
      
      <br />

      <div className="flex justify-center mb-40">
        <Preview/>
      </div> 

      <Footer />

    </div>
  )
}

export default Home;