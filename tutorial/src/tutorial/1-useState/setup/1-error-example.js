import React from 'react';

const ErrorExample = () => {
  let title = 'Random title'
  const handleClick = ()=>{
    console.log(title);
    title = "Title changed... yooo"
  } // this code is not changing the tile becuase we need to triger the render fot that we will use useState.
  return <React.Fragment>
    <h2>{title}</h2>
    <button className='btn' onClick={handleClick}>change the tilte</button>
  </React.Fragment>
};

export default ErrorExample;
