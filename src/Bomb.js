// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{
    
    constructor(props) {
        super() 
        this.state = {
            secondsLeft: props.initialCount
        }
    }


    render(){

        // let message 

        // if(this.state.secondsLeft === 0) {
        //     message = "Boom!"
        // } else {
        //     message = `${this.state.secondsLeft} left before I go boom!`
             
        // }

       let message =  this.state.secondsLeft === 0? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`

        return(

            <p>{message}</p>
        )



       
     
    
        
    }
    



}

export default Bomb;
