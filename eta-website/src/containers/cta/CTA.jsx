import React from 'react'
import './cta.css';
//import { FaMoneyCheck } from "react-icons/fa";
//import { BsFillPersonFill, BsCurrencyDollar} from "react-icons/bs";

const CTA = () => {

  /*const donationClicked =() => {
    alert("Thank you for your Donation!")
  }*/
  return (
    <div className='container'>
        <div className='donation'>
          <div className='donation-info-bg'>
            <div className='donation-info'>
              <h3>Billing Info</h3>
              <input type="text" name='firstname' className="donation-billing-field" placeholder="  Name"></input> 
              <input type="text" name='firstname' className="donation-billing-field" placeholder="  Email"></input> 
              <input type="text" name='firstname' className="donation-billing-field" placeholder="  Country"></input>
              <input type="text" name='firstname' className="donation-billing-field" placeholder="  Adress"></input>
              
            </div>
          </div>
          <form  className='donation-form'>
            <h2>Donation</h2>
            <div>
            <input type="text" name='firstname' className="donation-form-field" placeholder="Donation amount"></input>
            </div>
            <div className='donation-form-row'>
              <input type="text" name='firstname' className="donation-form-field" placeholder="Name on the card"></input> 
              <input type="text" name='lastname' className="donation-form-field" placeholder="Card number"></input>
            </div>
            <div className='donation-form-row'>
              <input type="text" name='email' className="donation-form-field" placeholder="Expiration date"></input>
              <input type="text" name='subject' className="donation-form-field" placeholder="CVC"></input>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
  )
}

export default CTA