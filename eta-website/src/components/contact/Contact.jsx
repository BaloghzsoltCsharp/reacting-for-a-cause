import React from 'react';
import './contact.css';
import { FaPhoneAlt, FaLocationArrow, FaAt} from "react-icons/fa";

export const Contact = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()))
  };


  return (
    
      <div className='container'>
        <div className='contact'>
          <div className='contact-info-bg'>
            <div className='contact-info'>
              <h3>< FaLocationArrow /> Address</h3>
              <p> Kerekerdő közepe </p>
              <h3>< FaPhoneAlt /> Phone</h3>
              <p>12/345-678</p>
              <h3>< FaAt /> E-mail</h3>
              <p>info@muffinman.hu</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className='contact-form'>
            <h2>Message us</h2>
            <div className='contact-form-row'>
              <input type="text" name='firstname' className="contact-form-field" placeholder="First name"></input> 
              <input type="text" name='lastname' className="contact-form-field" placeholder="Last name"></input>
            </div>
            <div className='contact-form-row'>
              <input type="text" name='email' className="contact-form-field" placeholder="Email"></input>
              <input type="text" name='subject' className="contact-form-field" placeholder="Subject"></input>
            </div>
            <textarea name='message' placeholder="Your message" className="contact-form-field"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    
  )
}

export default Contact;