import React from 'react';

import './App.css'
import { CTA, Footer, Header, Pets, AboutUs } from './containers';
import { Navbar, Contact } from './components'
import './App.css'


const App = () => {

  return (
    <div className='App'>
      <div className='image__bg'>
        < Navbar />
        < Header />
      </div>
      <div className='aboutUsMain'>
        < AboutUs />
      </div>
      <div id='adopt'>
      < Pets />
      </div>
      
      <div id='donate'className='donationPart'>
        < CTA />
      </div>


      <div id='contact'className='contactMain'>
        < Contact />
      </div>

      < Footer />
    </div>
  )
}

export default App