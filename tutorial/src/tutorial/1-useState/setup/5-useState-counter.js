import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    let temp = value;
    temp++;
    setValue(temp);
  }

  const complexIncrease = ()=>{
    setTimeout(()=>{
    //  setValue(value+1)
    // even after pressing it three times in a row it's increasing only one time becuase set function is async each time we click it thinks inital value is 0.
    setValue((prevState)=>{
      return prevState+1;
    })
    },2000)
  }
  return <>
    <section style={{margin:'4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={increment}>increase</button>
      <button className="btn" onClick={()=>setValue(0)}>reset</button>
      <button className="btn" onClick={()=>setValue(value-1)} >decrease</button>
    </section>
    <section style={{margin:'4rem 0'}}>
      <h2>More complex counter counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>complex increaes</button>
      </section>
  </>
}
export default UseStateCounter;
