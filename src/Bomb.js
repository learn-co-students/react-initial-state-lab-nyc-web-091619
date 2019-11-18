// your Bomb code here!
import React, { Component } from "react";

export class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }
  timer = setInterval(() => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 1
    });
  }, 1000);
  render() {
    return (
      <div>
        {this.state.secondsLeft > 0
          ? `${this.state.secondsLeft} seconds left before I go boom!`
          : (clearInterval(this.timer), "Boom!")}
      </div>
    );
  }
}

export default Bomb;
