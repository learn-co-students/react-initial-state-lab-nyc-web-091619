import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
        
    decrease = () => {
        
        this.setState({
            count: this.state.secondsLeft - 1
        })
    }
        
    render() {
        let msg = this.state.secondsLeft === 0? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div onClick={this.decrease}>
                {msg}
            </div>
        )
    }
  }