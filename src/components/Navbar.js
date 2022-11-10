import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function handleOpenMenu () {
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <nav className="text-center space-x-4">

      <nav class="p-5 bg-black shadow lg:flex lg:items-center lg:justify-between">
        <div class="flex justify-between items-center ">

          <h1 className='text-3xl font-serif'><a href="https://developedbydrewford.netlify.app">
            <span>Developed by </span>
            <span className='font-swash'>Drewford</span>
            <br />
            <span className='text-lg overline'>Andrew Cook - Web Developer</span>
          </a></h1>

          {/* hamburger menu button*/}
          <div onClick={handleOpenMenu} className="flex flex-col justify-between max-h-[40px] min-h-[20px] mr-[25px] hover:cursor-pointer" >
            <div className='bg-white h-[3px] w-[25px] transition transform active:rotate-90' ></div>
            <div className='bg-white h-[3px] w-[25px]' ></div>
            <div className='bg-white h-[3px] w-[25px]' ></div>
          </div>

        </div>

        {/* Pages on Horizontal Nav */}
        <ul class="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-black w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

          <li class="mx-4 my-6 lg:my-0">
            <Link to="/" href="#" class="text-xl hover:text-gray-500 duration-500">Home</Link>
          </li>
          <li class="mx-4 my-6 lg:my-0">
            <Link to="websites" href="#" class="text-xl hover:text-gray-500 duration-500">Websites</Link>
          </li>
          <li class="mx-4 my-6 lg:my-0">
            <Link to="games" class="text-xl hover:text-gray-500 duration-500">Games</Link>
          </li>
          <li class="mx-4 my-6 lg:my-0">
            <Link to="skills" href="#" class="text-xl hover:text-gray-500 duration-500">Skills</Link>
          </li>
          <li class="mx-4 my-6 lg:my-0">
            <Link to="about" class="text-xl hover:text-gray-500 duration-500">About</Link>
          </li>
          <li class="mx-4 my-6 lg:my-0">
            <Link to="contact" href="#" class="text-xl hover:text-gray-500 duration-500">Contact</Link>
          </li>

        </ul>
      </nav>

  </nav>
  )

}

export default Navbar;