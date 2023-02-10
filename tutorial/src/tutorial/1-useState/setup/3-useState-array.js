import React from 'react';
import { data } from '../../../data';

// import { useState } from 'react';
// instead of importing this we could have used React.useState([])
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id)=>{
      let newPeople = people.filter((person)=>person.id !== id) //this is for selecting element with no id matches.
       setPeople(newPeople)
  }
  return <>
  {
    people.map((person)=>{
      // console.log(person+" ");
      // return 'heii'
      const {id , name} = person;

      return (

        <div key={id} className="item">
           <h4>{name}</h4>
           <button className="btn" onClick={()=>removeItem(id)}>Remove {name}</button>
        </div>
      );
    })
  }
   <button className="btn" onClick={()=>setPeople([])}>clear All</button>
  </>
};

export default UseStateArray;
