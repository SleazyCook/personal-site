import React from 'react';

const Footer = () => {
  return(
    <div>
      <br />

      <footer className="text-center text-sm ">
        Built using React.js and Tailwind CSS and hosted on Netlify.
        <br />
        <span className='font-serif'> Developed by</span>
        <span className='font-swash'> Drewford</span>
      </footer>

      {/* Social Links */}
      <div className="flex justify-center pt-[5px]">
        {/* LinkedIn Link */}
        <a href="https://www.linkedin.com/in/andrew-cook-271544205/" target="_blank"><img alt="linked in icon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="35" width="35"></img></a>
        {/* spacer */}
        &nbsp;
        {/* Discord Link */}
        <a href="https://discord.gg/SAgrmBXjeV" target="_blank"><img alt="discord icon" src="https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Square-1024x1024.png" height="35" width="35"></img></a>
        &nbsp;
        {/* Code Wars Link */}
        <a href="https://www.codewars.com/users/sleazycook" target="_blank"><img alt="code wars icon" src="https://www.codewars.com/packs/assets/logo.61192cf7.svg" heigh="35" width="35"></img></a>
      </div>

      <br />
      <br />
    </div>
  )
}

export default Footer;