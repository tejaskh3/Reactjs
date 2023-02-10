
// need?
// in if and else case we can't return values of elements or coomponents we want, that is why we use short= circuit evaluation(truthy-falsy) and tertionary operator.
import React, { useEffect, useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false)
  const firstValue = text || 'hello world'; // this text here is truthy
  const secondValue = text && 'hello world';
  // console.log(secondValue);

  return <>
  {/* <h1>{firstValue}</h1>
  <h2>Value: {secondValue}</h2> */}
     {/* {if(39){console.log("hello world.")}} this will not work here */}.
     <h1>{text || "jhon doe"}</h1>
     <button className="btn" onClick={()=> setIsError(!isError)}>toggle error</button>
     {isError && <h3>Error.....</h3>}
     {isError?<Book></Book>:<p>no book prensent</p>} // i made this.
  </>
};

const Book =()=>{
  return <section>
    <p>book1</p>
    <p>book2</p>
  </section>
}
export default ShortCircuit;
