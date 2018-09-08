import React from 'react'
import {render} from 'react-dom'

class InputText extends React.Component {
    render(){
        const {errors,...rest} = this.props
        const messages = errors && errors.length >0
         ? errors.map((e,i)=>
            <div 
                key={`error_${i}`}
                style={{color:'red'}}
            >
              {e}
            </div>
        )
        : null
    return(
        <label>
            <input type="text"
                {...rest}
            />
            {messages}
        </label>
        )
    }   
} 

export default InputText