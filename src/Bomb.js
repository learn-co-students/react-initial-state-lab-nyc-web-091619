// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        let text = ((this.state.secondsLeft > 0) ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!')
        
        return (
            <div>
                {text}
            </div>
        )
    }
}