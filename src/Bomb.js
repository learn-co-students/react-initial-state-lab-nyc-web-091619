import React from 'react';

class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return(
            <div>{message}</div>
        )
    }
}

export default Bomb;

// {/* <Bomb />
// ✓ should set the `secondsLeft` to the value of the `initialCount` prop
// ✓ render the correct text when the timer is not 0
// ✓ render the correct text when the timer is 0 */}