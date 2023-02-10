
import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(()=>{
    console.log('call useEffect');
    if(value>=1){
      document.title = `New messages ${value}`;
  }
  // }); we can pass an array here, an array of dependecies.
  //[] means run on intial render.
},[value]);
useEffect(()=>{
  console.log('hello world');
},[]);
  console.log('render component');
  return <>
  <h1>
    <h1>{value}</h1>
    <button className="btn" onClick={()=>setValue(value+1)}>click me</button>

  </h1>
  </>
};

export default UseEffectBasics;
