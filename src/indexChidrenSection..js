// import
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render(){
    return(
        <div>
            <Heading1>I am header 3</Heading1>
            <Section>
                <div>div 1</div>
                <div>div 2</div>
            </Section>
         </div>
        )
    }
} 


function Section(props){
    return (
        <section style={{padding:20}}>{props.children}</section>

    )
}

function Heading1(props){
    return(
        <h1 style={{color:'red'}}>{props.children}</h1>
    )
}

// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')
)