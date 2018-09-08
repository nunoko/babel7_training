// import
import React from 'react'
import {render} from 'react-dom'

class CheckboxWithLabel extends React.Component{
    state = {isChecked:false}
    onChange = ()=>{
        //this.setState(s=>({isChecked:!s.isChecked}))
        this.setState((prevState,props)=>{
            return{
                isChecked:!prevState.isChecked,
            }
        })
    }
    
    render(){
        return (
            <label>
                <input
                    type='checkbox'
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        )
    }
}

CheckboxWithLabel.defaultProps = {
    labelOn:'On',
    labelOff:'Off',
}

export default CheckboxWithLabel