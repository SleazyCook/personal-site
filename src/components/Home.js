import React from 'react';
import Preview from './Preview'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <br />
      <div className="quote">
      There is art and beauty and power 
      <br />
      in the primal images of fantasy
      <br />
      - Guillermo del Toro
      </div>
      <Link to="preview">Project Preview</Link>
      {/* <Preview /> */}
    </div>
  )
}

export default Home;