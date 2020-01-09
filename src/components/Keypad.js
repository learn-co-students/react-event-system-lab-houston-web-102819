// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{
    inputPass = () => console.log ('Entering password...')
    render () {
        return(
            <div>
                <input
                type="password"
                onKeyUp={this.inputPass}
                />
            </div>
        )
    }
}
export default Keypad;