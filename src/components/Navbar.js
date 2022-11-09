import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="text-center space-x-4">
{/*       
        <Link to="/" className="nav-item">Home</Link>

        <Link to="about" className="nav-item">About</Link>

        <Link to="portfolio" className="nav-item">Portfolio</Link> */}

    <nav class="p-5 bg-black shadow lg:flex lg:items-center lg:justify-between">
      <div class="flex justify-between items-center ">
        {/* <span class="text-2xl font-[Poppins] cursor-pointer">
          Developed by Drewford
          <br />
          <span className="text-">Andrew Cook - Web Developer</span>
        </span> */}

        <h1 className='text-3xl font-serif'><a href="https://developedbydrewford.netlify.app">
          <span>Developed by </span>
          <span className='font-swash'>Drewford</span>
          <br />
          <span className='text-lg overline'>Andrew Cook - Web Developer</span>
        </a></h1>

        <span class="text-3xl cursor-pointer mx-2 lg:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>

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

        {/* <button class="bg-white-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-white-500 rounded ">
          Get started
        </button> */}
      {/* <h2 class=""></h2> */}
      </ul>
  </nav>

  </nav>
  )

}

export default Navbar;