import React from 'react'

class Bomb extends React.Component {
    
    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>{message}</div>
            // <div>
            //     <p> {this.state.secondsLeft} seconds left before I go boom! </p>
            // </div>

        )
    }

}

export default Bomb