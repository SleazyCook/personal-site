import React from 'react';

const Certs = () => {
  return (
    <div >
      <ul className="text-center">
        <li>
          <p><b>Full-Stack Web Development Bootcamp</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: December 9th, 2022</p>
          <p>University of Texas at Dallas</p>
          <p>Powered by Fullstack Academy</p>
        </li>

        <br />

        <li>
          <p><b>Advanced CSS & SASS</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: March 5th, 2023</p>
          <p>Udemy</p>
        </li>

        <br />

        <li>
          <p><b>The Git & GitHub Bootcamp</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: February 14, 2023</p>
          <p>Udemy</p>
        </li>

        <br />

        <li>
          <p><b>Full-Stack Software Engineer Career Path</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: November 15th, 2022</p>
          <p>Codecademy</p>
        </li>

        <br />

        <li>
          <p><b>Responsive Web Design</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: November, 22, 2022</p>
          <p>freeCodeCamp</p>
        </li>

        
        <br />


        <p className='text-center text-2xl underline'>
          Code Wars
        </p>

        <div className="flex text">
          <a className="mx-auto" target="_blank" href="https://www.codewars.com/r/C6HkBg"><img src="https://www.codewars.com/users/sleazycook/badges/micro" alt="codewars badge micro" /></a>
        </div>


        {/* <li>
          <p><b>Computer Science Career Path</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: December 6th, 2022</p>
          <p>codecademy</p>
        </li> */}

        <br />

        {/* <li>
          <p><b>Computer Science Career Path</b></p>
          <p>Certificate of Completion</p>
          <p>Issued: December 6th, 2022</p>
          <p>codecademy</p>
        </li> */}

        <br />
      </ul>

    </div>
  )
}

export default Certs;