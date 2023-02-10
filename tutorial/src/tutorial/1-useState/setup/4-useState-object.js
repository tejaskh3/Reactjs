// In this we will learn about multiple state values
import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({name:"Tejas", age:20,message:"Hii World." })
  // instead of making object, we could have achieved the same thing from assinging seprately
  const [name, setName] = useState('Tejas')
  const [age, setAge] = useState(20)
  const [message, setMessage] = useState('Hii world')
  const changeMessage = ()=>{
      // setPerson('Hello world!') this wouldn't change the message /
      // setPerson({message:"message changed"}) // this will change the message but rest of the things will be vanished here.
      // so we need to use split operator to over come this prolem.
      // if(person.message!="message changed")
      // setPerson({...person, message:"message changed"})
      // else{
      // setPerson({...person, message:"Hii World"})
      // }
      // the above one is correct. Now we will see using seprate hook for each property
      if(message!="message changed")
      setMessage('message changed')``
      else{
      setMessage("Hii World")
      }
  }
  return <>
     {/* <h3>{person.name}</h3>
     <h3>{person.age}</h3>
     <h3>{person.message}</h3> */}
     {/* the above there line were being used for object approach */}
     <h3>{name}</h3>
     <h3>{age}</h3>
     <h3>{message}</h3>
     <button className="btn" onClick={changeMessage}>Change message</button>
  </>
};

export default UseStateObject;
