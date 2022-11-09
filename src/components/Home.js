import React from 'react';
import Preview from './Preview'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <br />
      <div className="text-center text-2xl">
        There is art and beauty and power 
        <br />
        in the primal images of fantasy
        <br />
        - Guillermo del Toro
      </div>
      
      <div className="flex flex-row">
        <Preview />
      </div>
      
    </div>
  )
}

export default Home;