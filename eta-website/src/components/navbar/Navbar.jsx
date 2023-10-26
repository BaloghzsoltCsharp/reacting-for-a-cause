import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.png'

const Menu = () =>{
  return(
    
    <>
      <p><a href="#aboutus">About Us</a></p>
      <p><a href="#adopt">Adopt</a></p>
      <p><a href="#contact">Contact</a></p>
      <p className='disclaimer23'><a>This is just a project that i can show around.</a></p>
    </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="eta__navbar">
      <div className="eta__navbar-links">

        <div className="eta__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="eta__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="eta__navbar-donate">
        <a href="#donate" type='button'><p>Donate</p></a>
      </div>
      <div className="eta__navbar-menu">
          {
          toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick = {()=>setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick = {()=>setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className="eta__navbar-menu_container scale-up-center">
                <div className="eta__navbar-menu_container-links">
                  <Menu />
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar