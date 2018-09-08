import React from 'react'
import {render} from 'react-dom'
import InputText from './InputText'

const App = () => {
    return(
        <InputText placeholder='ppp' errors={['e1','e2']}/>
    )
}

render(
    <App />,
    document.querySelector('#app')
)