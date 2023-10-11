import React from 'react';
import {certsData} from './CertsData';

const Certs = () => {
  return (
    <div >
      <ul className="text-center">


        {certsData.map((certsObj) => {
          return (
              <li key={certsObj.id} className='mb-4'>
                <p><b>{certsObj.name}</b></p>
                <p>{certsObj.type}</p>
                <p>Issued: {certsObj.issue}</p>
                <p>{certsObj.issuer}</p>
                <p>{certsObj.detail}</p>
              </li>
          )
        })}

        <p className='text-center text-2xl underline'>
          Code Wars
        </p>

        <div className="flex text mb-10">
          <a className="mx-auto" target="_blank" href="https://www.codewars.com/r/C6HkBg"><img src="https://www.codewars.com/users/sleazycook/badges/micro" alt="codewars badge micro" /></a>
        </div>


      </ul>

    </div>
  )
}

export default Certs;