import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="text-center text-xl mx-10">
      <br />
      <br />
      Andrew Cook
      <br />
      Houston, TX 77016
      <br />
      developedbydrewford@gmail.com
      <br />
      (956) 278-0093
      <br />

      <a className="underline" target="_blank" href="https://andrew-cook.netlify.app">
        Resume
      </a>

      <br />

      <a className="underline" target="_blank" href="https://discord.gg/SAgrmBXjeV">
        Discord
      </a>

      <br />

      <a className="underline" target="_blank" href="https://www.linkedin.com/in/developedbydrewford/">
        LinkedIn
      </a>

      <br />
      
      <a className="underline" target="_blank" href="https://github.com/SleazyCook">
        GitHub
      </a>

      <br />
      <a className="underline" target="_blank" href="https://www.codewars.com/users/sleazycook">
        Code Wars
      </a>
      
      <br />
      <a className="underline" target="_blank" href="https://www.upwork.com/freelancers/~018529cc25c83cc183">
        Upwork
      </a>
      <br />
      
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default Contact;