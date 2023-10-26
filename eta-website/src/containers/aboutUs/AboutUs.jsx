import React from 'react';
import './aboutUs.css';
import { useState } from 'react'


const AboutUs = () => {
  const [isActive, setActive] = useState(false);

  const adoptionguide = () => {
    setActive(!isActive);
  }
  const MoreInfoClicked = () => {
    console.log("clicked")
  }

  const ourFoundation = "We perform animal protection tasks in Tata and in the surrounding areas. Our goal is to return stray animals to their original owners or adopt them to the responsible dog handler.";
  const adoptionInformations = "The condition for adopting a dog is to sign the Adoption Agreement. There is no charge for the dogs in our shelter. Interventions have only a minimal fee, which is a reduced price for our Adopters.";
  const howCanYouHelp = "There are several ways to help us. For example, you can volunteer, become a temporary adopter, donate equipment and food, or donate 1% of your tax to us.";


  return (
    <div id='aboutus' className='aboutUs'>
      <div className='aboutUsElements'>
        <div className='responsive'>
          <img className='aboutUsImages' src='https://media.newyorker.com/photos/606b51c2313f23423168acbe/master/w_2560%2Cc_limit/Brewer-CompanionDogApplication.jpg' alt='foundationhouse'></img>
          <p className='title'>Our Foundation</p>
        </div>
        <div className='aboutUsInfo'>
          <p >{ourFoundation}</p>
        </div>
        <div className='aboutUsButton'>
          <button className='buttons' onClick={MoreInfoClicked}>More info</button>
        </div>
      </div>
      <div className='aboutUsElements'>
        <img className='aboutUsImages' src='https://static.wixstatic.com/media/11062b_bffbf036e0964c7da53ca8ce5c93cb55~mv2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_bffbf036e0964c7da53ca8ce5c93cb55~mv2.jpg' alt='woman smiling and huging a dog'></img>
        <p className='title'>Adoption Informations</p>
        <div className='aboutUsInfo'>
          <p >{adoptionInformations}</p>
        </div>
        <div className='aboutUsButton'>
          <button className='buttons' onClick={adoptionguide}>More info</button>
        </div>
      </div>
      <div className='aboutUsElements'>
        <img className='aboutUsImages' src='https://static.wixstatic.com/media/06c4a6_702e2a1bdab341148f4dd9f33fc21e1b~mv2.png/v1/fill/w_560,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Donation%20Image.png' alt='foundationhouse'></img>
        <p className='title'>How can You help?</p>
        <div className='aboutUsInfo'>
          <p >{howCanYouHelp}</p>
        </div>
        <div className='aboutUsButton'>
          <button className='buttons' onClick={MoreInfoClicked}>More info</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs