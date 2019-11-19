// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        const seconds = this.state.secondsLeft;
        if (seconds === 0) {
            return <div>Boom!</div>
        } else {
            return <div>{seconds} seconds left before I go boom!</div>
        }
    }
}

export default Bomb