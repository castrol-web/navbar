import React, { useState } from 'react'
import Logo from "../images/logo.png"
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes}  from 'react-icons/fa';
import "./navstyle.css";

function Navbar() {
  const [clicked,setClicked] = useState(false);
  //handle click function
  function handleClick(){
    setClicked(!clicked);
  }
  return (
    <nav>
        <div className='navLogo'><img src={Logo} alt='logo'></img></div>
        <div>
        <ul  id='navbar' className={clicked ? "#navbar active" :"#navbar"}>
            <li><a className='active' href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/Gallery'>Gallery</a></li>
            <li><a href='/Contact'>Contact</a></li>
        </ul>
        </div>
        <div id='mobile' onClick={handleClick}>
          {clicked ? <i><FaTimes/></i> :<i><GiHamburgerMenu/></i>}
        </div>
    </nav>
  )
}

export default Navbar;