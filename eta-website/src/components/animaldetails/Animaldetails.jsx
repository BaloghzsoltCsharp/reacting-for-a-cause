import React from 'react'
import './animaldetails.css'

const Animaldetails = (props) => {
  return (
    <div className="eta__header-content_animals header__padding ">
        <div className="eta__header-content_animals-img">
            <img src={props.icon} alt="" />
        </div>
        <div className="eta__header-content_animals-details">
            <p>{props.amount}</p>
            <p className='animal__name'>{props.name}</p>
            <p>in the database</p>
        </div>
    </div>
  )
}

export default Animaldetails