// import
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    componentDidMount(){
        //this.refs.txt.focus()
        this.txt.focus()
        console.warn(this.bt.getBoundingClientRect())
    }

    render(){
    return(
        <div>
            <h1>Ref</h1>
            <input type='text' ref={r => this.txt = r} />
            <button ref={r=>this.bt = r}>I am button</button>
            
        </div>
        )
    }
   
} 


// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')
)