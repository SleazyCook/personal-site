import React from 'react';
import Preview from './Preview'

const Home = () => {
  return (
    <div>
      <br />
      <div className="text-center text-2xl ">
        There is art and beauty and power 
        <br />
        in the primal images of fantasy
        <br />
        - Guillermo del Toro
      </div>
      
      {/* <br /> */}

      <div className="flex justify-center">
        <Preview/>
      </div>

      <br />
      
    </div>
  )
}

export default Home;