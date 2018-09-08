// import
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = {firstName:'aaa', lastName : '' , address:'',
            agree:true}
    render(){
    return(
        <div>
            <h1>Forms</h1>
            <button onClick={this.handleClick}>Change</button>
            <form onSubmit={this.handleSubmit}>
            {/* Form unControl
            
            <input type='text' placeholder='placeholder'
            defaultValue='aaa'
            onChange={this.handleChange}
            ref={r=>this.txt=r}
            />*/}
            <input type='text' value={this.state.firstName} 
                onChange={this.handleChange}
                name='firstName'
            />
            <input type='text' value={this.state.lastName} 
                onChange={this.handleChange}
                name='lastName'
            />
            <textarea value={this.state.address}
                onChange={this.handleChange}
                name='address'
            />
            <input type='checkbox' value={this.state.agree}
                checked={this.state.agree}
                onChange={this.handleChange}
                name='agree'
            />
            <button type='submit'>Submit</button>
            </form>
        </div>
        )
    }

    handleClick = e =>{
        this.setState({firstName:'Tada!'})
    }
    handleChange = e => {
        const value= e.target.type==='checkbox'
            ? e.target.checked
            : e.target.value
        const name = e.target.name
        this.setState({[name]: value})
    }
    handleSubmit = e =>{
        // prevent page fresh
        e.preventDefault()
        console.warn(this.state)
    }
   //handleChange = e => {
       // send event =e
       /*console.warn(e.target.value)
       console.warn(this.txt.value)*/
  // }
} 


// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')
)