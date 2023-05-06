import React from 'react';
import {certsData} from './CertsData';

const Certs = () => {
  return (
    <div >
      <ul className="text-center">


        {certsData.map((certsObj) => {
          return (
            <>
              <li>
                <p><b>{certsObj.name}</b></p>
                <p>{certsObj.type}</p>
                <p>Issued: {certsObj.issue}</p>
                <p>{certsObj.issuer}</p>
                <p>{certsObj.detail}</p>
              </li>

              <br />
            </>
          )
        })}

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