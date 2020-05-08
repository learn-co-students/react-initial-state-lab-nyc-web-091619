import React, {Component} from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render() {
        return (
            <h2>{this.state.secondsLeft === 0 ? <h1>Boom!</h1> : this.state.secondsLeft + ' seconds left before I go boom!'}</h2>
        )
    }
}

export default Bomb