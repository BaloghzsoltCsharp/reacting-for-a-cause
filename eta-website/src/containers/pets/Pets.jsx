import React from 'react'
import './pets.css'
import Pet from "../../components/pet/Pet"

const Details = Pet.Petdetails;

const Adopt = () => {
  const amos = {
    "link": "https://www.animalhouseshelter.com/wp-content/uploads/2022/08/amos-head-0905a.jpg",
    "name": "Amos",
    "breed": "Labrador Retriever / Boxer",
    "age": "4 years",
    "weight": "58 pounds",
    "gender": "Male",
    "temper": "I love to play fetch and I definitely enjoy a good belly rub!",
    "className": 'zsdogs'
  }
  const bert = {
    "link": "https://www.animalhouseshelter.com/wp-content/uploads/2022/05/bert-head-0817a-600x600.jpg",
    "name": "Bert",
    "breed": "German Shepherd Dog",
    "age": "4 years",
    "weight": "68 pounds",
    "gender": "Male",
    "temper": 'I love water and laying in a kiddie pool! I also enjoy playing with tennis balls. Ive been told I am a very smart boy ... I know "sit", "down" and "paw".',
    "className": 'zsdogs'
  }
  const elijah = {
    "link": "https://www.animalhouseshelter.com/wp-content/uploads/2021/11/elijah-head-0621a-600x600.jpg",
    "name": "Elijah",
    "breed": "Husky",
    "age": "4 years",
    "weight": "58 pounds",
    "gender": "Male",
    "temper": " I am a smart boy that knows sit and paw. I walk well on a leash and loves to play with toys.",
    "className": 'zsdogs'
  }
  const radley = {
    "link": "https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=339355",
    "name": "Radley",
    "breed": "Domestic Shorthair crossbreed",
    "age": "5 years",
    "weight": "30 pounds",
    "gender": "Female",
    "temper": "She really loves company it is on her own terms as after she's had enough attention she'll find somewhere quiet to settle, so a chilled-out home would work really well for her. ",
    "className": 'zsdogs'
  }
  const pod = {
    "link": "https://www.rspca.org.uk/GenericImage/CallGenericImage?source=petSearch&size=large&imageId=334260",
    "name": "Pod",
    "breed": "Dwarf",
    "age": "2 years",
    "weight": "12 pounds",
    "gender": "Male",
    "temper": " I am a very gentle affectionate rabbit who enjoys giving you a wash. He is a friendly boy and really enjoys company.",
    "className": 'zsdogs'
  }
  return (

    <div>
      <div className='fbox'>
        <div className="title-div">
          <h1>Pets available for adoption</h1>
        </div>

        <div className="pets-div">
          <Details {...amos} />
          <Details {...bert} />
          <Details {...elijah} />
          <Details {...radley} />
          <Details {...pod} />
        </div>


      </div>
    </div>
  );
}
{/* <div><Details {...amos} /></div>
<div><Details {...bert} /></div>
<div><Details {...elijah} /></div>
<div><Details {...radley} /></div>
<div><Details {...pod} /></div> */}

export default Adopt