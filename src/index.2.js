// import
import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
    render(){
    return(
        <div>Hello</div>
        )
    }
} 

// element
// JSX
//const element = <div>Hello {Math.random()}</div>
const element = (
<div>
    <h1 className='a' tabIndex='0'>Hello {Math.random()}</h1>
    <div className='a' tabIndex='0'>Good Morning</div>
    <ul>
        <li>1st</li>
        <li>2nd</li>
    </ul>
</div>
)
/*const element = React.createElement("div","","Hello  NOKY")
console.warn(element)*/


// dom
ReactDOM.render(
    element,
    document.querySelector('#app')// select DOM node
)
// dom
/*ReactDOM.render(
    <Hello />,
    document.querySelector('#app')
)*/