import React from 'react'
import ReactDom from 'react-dom'
function Greeting(){ // not a regular fucntion this is the component itself
return <h1>Hi I just wrote my first component.</h1>
}
ReactDom.render(<Greeting/>,document.getElementById('root'))