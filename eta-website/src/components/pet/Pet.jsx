import React from 'react'
import './pet.css'
import { useState } from 'react'

const Petdetails = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (<div className='pet-div'>
    <img src={props.link} alt="pic of the dog" className="img-div" onClick={toggleModal}></img>
    <div className="pet-container">
      <div className="pet-name"><p>{props.name}</p></div>
      {modal && (
        <div>
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <table>
              <tbody>
                <tr>
                  <td><img src={props.link} alt="pic of the dog" className="modalimg" onClick={toggleModal}></img><br /></td>
                  <td><h3 >{props.name}</h3><br />
                    <b>Breed</b>: {props.breed}<br />
                    <b>Age</b>: {props.age}<br />
                    <b>Weight</b>: {props.weight}<br />
                    <b>Gender</b>: {props.gender}<br />
                    <b>Temperament</b>: {props.temper}<br />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>

      )
      }
    </div>
  </div >
  )
}

const out = { Petdetails }
export default out