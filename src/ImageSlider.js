import React, { Component } from 'react';

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
        
    increment = () => {
        
        this.setState({
            count: this.state.currentSlideIndex + 1
        })
    }
        
    render() {
        return (
            <div onClick={this.increment}>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
  }