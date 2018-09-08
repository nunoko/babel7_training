// import
import React from 'react'
import ReactDOM from 'react-dom'

const DATA = {
    title: 'Restaurant',
    items: [
        {id:1 ,name:'Fuji',type:'japanese'},
        {id:2 ,name:'Zen',type:'japanese'},
        {id:3 ,name:'OOTOYA',type:'japanese'},
        {id:4 ,name:'Burger Kingamerican',type:'american'},
        {id:5 ,name:'Carl\'s Jr.',type:'american'},
        {id:6 ,name:'McDonald\'s',type:'american'},
    ],
}


class App extends React.Component {
state = {
    selectedType: null,
}

    render(){
        const list = DATA.items
            //.filter(e=>e.type==='japanese')
            .filter(e=>
                this.state.selectedType
                    ?e.type===this.state.selectedType
                    :true)
            .map(e=><li key={e.id}>{e.name}</li>)
    return(
        <div>
            <h1>{DATA.title}</h1>
            <select onChange={this.handleChange}>
                <option value=''>Please Selected</option>
                <option value='japanese'>japanese</option>
                <option value='american'>american</option>
            </select>
            <ul>
                {list}
             </ul>
        </div>
        )
    }
    handleChange=(event)=>{
        const value = event.target.value
        console.warn(value)
        this.setState((ps,p)=>{
            return { selectedType : value, }    
        })
    }
} 


// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')// select DOM node
)
