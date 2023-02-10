import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return <>

  <button className="btn" onClick={()=>setShow(!show)}>
    show/hide
  </button>
  {show && <Item></Item>}
  </>
};
const Item = () =>{
  const [size, setSize] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize', checkSize =>{
      setSize(window.innerWidth);
      // as we are toggeling it we should use clean up function.
    },[])
  })
  return <div style={{margin:'2rem'}}>
    <h1>Window</h1>
    <h2>size:{size}px</h2>
  </div>
}
export default ShowHide;
