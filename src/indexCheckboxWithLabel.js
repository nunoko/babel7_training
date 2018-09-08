// import
import React from 'react'
import {render} from 'react-dom'
import CheckboxWithLabel from './CheckboxWithLabel'

const App = () => {
    // Function Component
    return(
        <CheckboxWithLabel />
    )
}


// dom
render(
    <App />,
    document.querySelector('#app')
)