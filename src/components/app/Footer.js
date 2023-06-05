import "./footer.css"

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
        {/* GitHub Link */}
        &nbsp;
        <a href="https://github.com/SleazyCook" target="_blank"><img className="f-icon" alt="git hub icon" src="https://i.imgur.com/AGte8x2.png" height="35" width="35"/></a>
        {/* LinkedIn Link */}
        &nbsp;
        <a href="https://www.linkedin.com/in/andrew-cook-271544205/" target="_blank"><img className="f-icon" alt="linked in icon" src="https://i.imgur.com/aiv7WDz.png" height="35" width="35"></img></a>
        {/* spacer */}
        &nbsp;
        {/* Discord Link */}
        <a href="https://discord.gg/SAgrmBXjeV" target="_blank"><img className="f-icon" alt="discord icon" src="https://i.imgur.com/zAljZQy.png" height="35" width="35"></img></a>
        &nbsp;
        {/* Code Wars Link */}
        <a href="https://www.codewars.com/users/sleazycook" target="_blank"><img className="f-icon" alt="code wars icon" src="https://i.imgur.com/L48uyJR.png" height="35" width="35"></img></a>
      </div>

      <br />
      <br />
    </div>
  )
}

export default Footer;