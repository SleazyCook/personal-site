import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }

  // function Menu(e){
  //   let list = document.getElementById('nav-list');
  //   e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  // }

  return (
    <nav className="text-center space-x-4">

      <nav className="p-5 bg-black shadow lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-between items-center ">

          {/* header on left side of nav */}
          <h1 className='text-3xl font-serif'><a href="https://developedbydrewford.netlify.app">
            <span>Developed by </span>
            <span className='font-swash'>Drewford</span>
            <br />
            <span className='text-lg overline'>Andrew Cook - Web Developer</span>
          </a></h1>


          {/* style={{width: '100%', height: '100vh'}} */}
          <div id="box" className="lg:opacity-0 opacity-100">
            <div id="burger-house">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>

            <div className={menu_class}>
              <br />
              <Link to="/" onClick={updateMenu} className="text-xl hover:text-gray-500 duration-500">Home</Link>
              <br />
              <br />
              <Link to="websites" onClick={updateMenu} className="text-xl hover:text-gray-500 duration-500">Websites</Link>
              <br />
              <br />
              <Link to="games" onClick={updateMenu} className="text-xl hover:text-gray-500 duration-500">Games</Link>
              <br />
              <br />
              <Link to="skills" onClick={updateMenu} className="text-xl hover:text-gray-500 duration-500">Skills</Link>
              <br />
              <br />
              <Link to="About" onClick={updateMenu} className="text-xl hover:text-gray-500 duration-500">About</Link>
              <br />
              <br />
              <Link to="Contact" onClick={updateMenu} className="text-xl hover:text-gray-500 duration-500">Contact</Link>
            </div>
        </div>


          {/* react-burger-menu by npm install */} 

          {/* hamburger menu button from Tailwind CSS */}
          {/* <div onClick={handleOpenMenu} className="lg:hidden flex flex-col justify-between max-h-[40px] min-h-[20px] mr-[25px] hover:cursor-pointer" >
            <div className='bg-white h-[3px] w-[40px] transition transform active:rotate-90' ></div>
            <div className='bg-white h-[3px] w-[40px]' ></div>
            <div className='bg-white h-[3px] w-[40px]' ></div>
          </div> */}

          {/* <span className="text-3xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick={Menu(this)}></ion-icon>
          </span> */}

        </div>

        {/* Pages on Horizontal Nav */}
        <ul id="nav-list" class="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-black w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

          <li class="mx-4 my-6 lg:my-0">
            <Link to="/" class="text-xl hover:text-gray-500 duration-500">
              Home</Link>
          </li>

          <li class="mx-4 my-6 lg:my-0">
            <Link to="websites" class="text-xl hover:text-gray-500 duration-500"
            >Websites</Link>
          </li>

          <li class="mx-4 my-6 lg:my-0">
            <Link to="games" class="text-xl hover:text-gray-500 duration-500">
              Games</Link>
          </li>

          <li class="mx-4 my-6 lg:my-0">
            <Link to="skills" class="text-xl hover:text-gray-500 duration-500">
              Skills</Link>
          </li>

          <li class="mx-4 my-6 lg:my-0">
            <Link to="about" class="text-xl hover:text-gray-500 duration-500">
              About</Link>
          </li>

          <li class="mx-4 my-6 lg:my-0">
            <Link to="contact" class="text-xl hover:text-gray-500 duration-500">
              Contact</Link>
          </li>

        </ul>
      </nav>

  </nav>
  )

}

export default Navbar;