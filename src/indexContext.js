// import
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
//yarn add prop-types

const MESSAGES = ['Hello','Good Morning','Sawasdee']
class App extends React.Component {
    state = {textColor:'blue'}
    getChildContext(){
        // send values in context and return context from state
        console.warn('App: getChildContext',this.state.textColor)
        return{textColor:this.state.textColor}
    }
    render(){
    return(
        <div>
            <button onClick={this.handleClick}>Make Red</button>
            <Chat messages={MESSAGES} 
                //textColor={this.state.textColor}
            />
        </div>
        )
    }
    handleClick=()=>{
        this.setState({textColor:'red'})
    }
} 

App.childContextTypes = {
    textColor : PropTypes.string
}

class Chat extends React.Component {
    render(){
    return(
        <MessageList
                messages={this.props.messages} 
                //textColor={this.props.textColor}
                />
        )
    }
} 


class MessageList extends React.Component {
    render(){
        const {messages} = this.props
        //const {messages,textColor} = this.props
    return(
        <div>
        {messages.map(m=>
        <Message key={`msg_${m}`} messages={m} 
        /*textColor={textColor}*/ />
        )}
        </div>
        )
    }
} 

class Message extends React.Component{
    render(){
        return(
            <div style={{color:this.context.textColor}}>
                {this.props.messages}
            </div>
        )
    }
}

Message.contextTypes = {
    // component pull context use
    textColor : PropTypes.string
}

// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')
)