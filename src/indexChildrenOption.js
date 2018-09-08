// import
import React from 'react'
import ReactDOM from 'react-dom'

const RadioIcon = ({ isSelected }) => {
    return (
        <div
            style={{
                borderColor:isSelected ? 'green' : '#ccc',
                borderSize:'2px',
                borderStyle:'solid',
                borderRadius:14,
                height:14,
                width:14,
                display:'inline-block',
                cursor:'pointer',
                background: isSelected ? 'rgba(0,0,0,0.05)':'',
            }}
        />
    )
}


class RadioOption extends React.Component {
    //state = {isSelected:false}
    render(){
    return(
        <div onClick={this.props.handleClick}>
            <RadioIcon isSelected={this.props.isSelected} />{this.props.children}
        </div>
        )
    }
    /*handleClick=()=>{
        this.setState({isSelected:true})
    }*/
}

class RadioGroup extends React.Component {
   // state = {selected:this.props.initialSelected}
    render(){
        const childrenWithProps = React.Children.map(this.props.children,child=>{
            return React.cloneElement(child,{
            handleClick:() => this.props.handleSelect(child.props.value),
            isSelected:child.props.value === this.props.selected,

            })
        })
        return <div>{childrenWithProps}</div>
    }
    /*handleSelect=(v)=>{
        this.setState({selected:v})
    }*/
}

class App extends React.Component {
    state = {selectedRadio:'md'}
    render(){
    return(
        <div>
            <h1>Selected: {this.state.selectedRadio}</h1>
            <RadioGroup 
                handleSelect={this.handleSelect}
                selected={this.state.selectedRadio}
                >
                <RadioOption value='xs'>Extra Small</RadioOption>
                <RadioOption value='sm'>Small</RadioOption>
                <RadioOption value='md'>Medium</RadioOption>
                <RadioOption value='lg'>Large</RadioOption>
            </RadioGroup>       
        </div>
        )
    }
    handleSelect=(v)=>{
        this.setState({selectedRadio:v})
    }

}
    

// dom
ReactDOM.render(
    <App />,
    document.querySelector('#app')
)