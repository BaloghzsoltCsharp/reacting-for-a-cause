import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaViber} from "react-icons/fa";

const Footer = () => {
  const facebookClicked = () => {
    window.open("https://www.facebook.com/tatai.allatotthon")
  }


  return (
    <div className='footer'>
      <div className='footer-socials'>
        <div className='footer-socials-logo'>
          < FaInstagram />
        </div>
        <div className='footer-socials-logo' onClick={facebookClicked}>
          < FaFacebook />
        </div>
        <div className='footer-socials-logo'>
          < FaViber />
        </div>
      </div>
      <div className='footer-links'>
        <div className='footer-links_div'>
          <p>Donate</p>
          <p>Pet rescue</p>
          <p>Fundraise</p>
        </div>
        <div className='footer-links_div'>
          <p>About us</p>
          <p>Partners</p>
        </div>
        <div className='footer-copyright'>
          <p>© 2022 Codecool Students</p>
        </div>
      </div>  
    </div>
  )
}

export default Footer