// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        const currentSlide = this.state.currentSlideIndex;
        return <div>I am on slide {currentSlide}</div>
    }
}

export default ImageSlider