import React from 'react'
import './header.css'
import { Animaldetails } from '../../components'

import dogIcon from '../../assets/dog.png'
import catIcon from '../../assets/cat.png'
import birdIcon from '../../assets/owl.png'

const Header = () => {
  return (
    <div className="eta__header section__margin-top">
      <div className="eta__header-content">
        <div className="eta__header-content__tod-text header__padding">
          <p>Topic of the day</p>
        </div>
        <div className="eta__header-content__tod-info header__padding">
          <div className='animal__name'>
            <p>Dachshunds</p>
          </div>
          <div className="animal__info">
            <p>Dachshunds are scent hound dogs bred to hunt badgers and other tunneling animals, rabbits, and foxes...</p>
          </div>
        </div>
        <Animaldetails icon={dogIcon} name={'Dogs'} amount={152} />
        <Animaldetails icon={catIcon} name={'Cats'} amount={114} />
        <Animaldetails icon={birdIcon} name={'Birds'} amount={97} />
      </div>
    </div>
  )
}

export default Header