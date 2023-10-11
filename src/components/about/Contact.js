import React from 'react';
import Footer from '../app/Footer';

const Contact = () => {

  const contact = [
    {
      id: 1,
      name: "Andrew Cook",
    },
    {
      id: 2,
      name: "Houston, Tx"
    },
    {
      id: 3,
      name: "drewford.dev@gmail.com"
    },
    {
      id: 4,
      name: "(956) 278-0093"
    },
    {
      id: 5,
      name: "Resume",
      link: ""
    },
    {
      id: 6,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/developedbydrewford/"
    },
    {
      id: 7,
      name: "Discord",
      link: "https://discord.gg/SAgrmBXjeV"
    },
    {
      id: 8,
      name: "GitHub",
      link: "https://github.com/SleazyCook"
    },
    {
      id: 9,
      name: "Code Wars",
      link: "https://www.codewars.com/users/sleazycook"
    }
  ]

  return (

    <div className='mt-10'>
      {contact.map((contactObj) => {
        return (
          <div key={contactObj.id} className='text-center mx-10 text-xl'>
          
            {!contactObj.link ? 
              <div >{contactObj.name}</div> :
              <a href={contactObj.link} className='text-center underline'>{contactObj.name}</a>}

          </div>
        )
      })}

      <Footer />
    
    </div>
  )
}

export default Contact;