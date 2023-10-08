import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const navigationArray = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "Websites",
      link: "websites"
    },
    {
      id: 3,
      name: "Games",
      link: "games"
    },
    {
      id: 4,
      name: "Skills",
      link: "skills"
    },
    {
      id: 5,
      name: "About",
      link: "about"
    },
    {
      id: 6,
      name: "Contact",
      link: "contact"
    }
  ]

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

  return (
    <nav className="text-center space-x-4">

      <nav className="p-5 bg-black shadow lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-between items-center ">

          {/* Website Header - Link back to '/' */}
          <h1 className='text-3xl font-serif'><a href="https://drewford.dev">
            <span>Developed by </span>
            <span className='font-swash'>Drewford</span>
            <br />
            <span className='text-lg overline'>Andrew Cook - Web Developer</span>
          </a></h1>

          {/* Hamburger Button */}
          <div id="box" className="lg:opacity-0 opacity-100">
            <div id="burger-house">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>

            {/* Vertical Dropdown Menu */}
            <div className={menu_class}>
              {navigationArray.map((navObj) => {
                return (
                  <Link key={navObj.id} to={navObj.link} onClick={updateMenu} className='block text-xl mt-4 mb-6 last:mb-2 hover:text-gray-500 duration-500'>{navObj.name}</Link>
                )
              })}
            </div>
        </div>

        </div>

        {/* Horizontal Nav Menu */}
        <ul id="nav-list" className="lg:flex lg:items-center z-[-1] lg:z-auto lg:static absolute bg-black w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">

          {navigationArray.map((navObj) => {
            return(
              <li key={navObj.id} className='mx-4 my-6 lg:my-0'>
                <Link to={navObj.link} className='text-xl hover:text-gray-500 duration-500'>
                  {navObj.name}
                </Link>
              </li>
            )
          })}

        </ul>
      </nav>

  </nav>
  )

}

export default Navbar;