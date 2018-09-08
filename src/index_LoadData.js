// import
import React from 'react'
import ReactDOM from 'react-dom'

const url = 'https://api.github.com/users/sindresorhus1/repos'
class App extends React.Component {
    state={data:null}
    componentDidMount(){
        /*$.getJSON(url)
        .then(d=> console.warn(d))*/
        fetch(url)
            .then(r=>{
                if(r.ok){
                    return r
                }
                throw new Error('error 404')
                
            })
            .then(d=>d.json())
            .then(d=>this.setState({data:d}))
            .catch(e=>console.error(e))
    }
    render(){
        const {data} = this.state
        let list = <span>Loading...</span>
        if(data != null){
            if(data.length>0){
                list = data.map(e=>{
                    return(
                        <div key={`repo_${e.id}`}>{e.name}</div>
                    )
                })
            }else if (data.length==0){
                list = <span>No repos</span>
            }
        }
        
        
    return(
        
        
        <div>
            <h1>Load data from github api.</h1>
                <div>{list}</div>
         </div>
        )
    }
} 
//export default App;
// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')
)