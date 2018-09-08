// import
import React from 'react'
import {render} from 'react-dom'


const Button = (props) => {
    // Function Component
    return(
        <button
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
        color: 'white'
    }
    return(
        <button style={prettyButtonStyle} 
        onClick={props.handleClick}>Click: {props.count}</button>
    )
}

//get comp -> new comp
class WithCounter extends React.Component{
    state = {count:0}
    render(){
        return this.props.children({
            handleClick:this.handleClick,
            count:this.state.count
            
        })
    }
    handleClick = e =>{
        this.setState(ps => ({count:ps.count+1}))
    }
}

//const ConunterButton = countify(Button)
//const PrettyCounterButton = countify(PrettyButton)

class App extends React.Component {
    render(){
    return(
        <div>
            <h1>Higher Order Component</h1>
            <WithCounter>
                { ({handleClick,count})=>{
                    return(
                        <div>
                        <h1>Button</h1>
                            <Button handleClick={handleClick} count={count}/>
                        </div>
                         )
                    }
                }
            </WithCounter>
            <br/>
            <br/>
            <WithCounter>
                { ({handleClick,count})=>{
                    return(
                        <div>
                        <h1>Pretty Button</h1>
                            <PrettyButton handleClick={handleClick} count={count}/>
                        </div>
                         )
                    }
                }
            </WithCounter>
        </div>
        )
    }
   
} 

// dom
render(
    <App />,
    document.querySelector('#app')
)