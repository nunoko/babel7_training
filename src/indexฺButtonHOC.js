// import
import React from 'react'
import {render} from 'react-dom'


const Button = (props) => {
    // Function Component
    return(
        <button 
        style={props.style}
        onClick={props.handleClick}>Click: {props.count}</button>
    )
}

const PrettyButton = (props) => {
    // Function Component
    const prettyButtonStyle = {
        backgroundColor: '#74ad5a',
        border: '1px solid #3b6e22',
        padding: '8px 16px',
        fontSize: 14,
        color: 'white',
        ...props.style,
    }
    return(
        <button style={prettyButtonStyle} 
        onClick={props.handleClick}>Click: {props.count}</button>
    )
}

//get comp -> new comp
function countify(Comp){
    // get comp and return new comp
    return class extends React.Component{
        state = {count:0}
        render(){
            console.warn(this.props)
            return(
                <Comp 
                handleClick={this.handleClick}
                count={this.state.count}
                {...this.props}

                />
            )
        }
        handleClick = e =>{
            this.setState(ps => ({count:ps.count+1}))
        }
    }
}

const ConunterButton = countify(Button)
const PrettyCounterButton = countify(PrettyButton)
//HOC1(hoc2(hoc3(Comp)))

class App extends React.Component {
    render(){
    return(
        <div>
            <h1>Higher Order Component</h1>
            <ConunterButton style={{padding:20}}  />
            <br/>
            <br/>
            <PrettyCounterButton style={{padding:20}} />
        </div>
        )
    }
   
} 

// dom
render(
    <App />,
    document.querySelector('#app')
)