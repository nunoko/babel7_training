// import
import React from 'react'
import {render} from 'react-dom'

class Woohoo extends React.Component {
    render(){
    return(
        <div>
            <h1>I am Woohoo</h1>
            <p>{this.props.hiddenText}</p>
        </div>
        )
    }   
} 

//Comp -> Comp
const enhance = Comp => class extends React.Component{
    componentDidMount(){
        console.warn('Helloooo')
    }
    
    render(){
        return(
            //Comp = Woohoo
            <Comp hiddenText="Secret" />
            )
        }
}
const Woohoo2 =enhance(Woohoo)

  
//export default Woohoo2
// dom
render(
    <Woohoo />,
    document.querySelector('#app')
)