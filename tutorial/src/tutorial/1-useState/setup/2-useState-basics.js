import React, { useState } from 'react';
// use state is an array
// componenet name must be uppercase
// must be in the finction/ component body
// cannot call conditionally
const UseStateBasics = () => {
  // // console.log(useState('Hello World'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1]; // this handler is a function that controlles our value
  // console.log(value, handler);
  // vaule is value, handler is a function.

  //  we will use array distructor for doing the same work.
  const [text, setText] = useState("OLD TITLE") // first one is variable and another one is function.
  const handleClick = ()=>{
    // i included this if else for fun xd
    if(text === "OLD TITLE")
    setText('NEW TITLE')
    else{
    setText('OLD TITLE')
    }
  }
  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>change the tilte</button>
  </React.Fragment>
};

export default UseStateBasics;
