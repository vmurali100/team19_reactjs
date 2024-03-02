import { Component } from "react";

export class RandomColorArr extends Component{
    constructor(){
        super();
    this.state = {
        colors : ["red","green", "blue", "purple", "green","black"],
        randomColor : ""
    }
    }

handleRandomColor = () =>{
    var getRandomIndex = Math.floor(Math.random() * this.state.colors.length); // Here we get a random index..
    var getRandomColor = this.state.colors[getRandomIndex]; // Here we get a particular color of that random Index..
    this.setState({
        randomColor : getRandomColor   // Here we update the state..
    });

}

 render(){
    return(
        <div>
            <h2 style={{color: "green"}}>Scenario 12</h2>

             <h3>Display Random Color</h3>
            <button onClick={this.handleRandomColor}>Click To Get a Random Color</button><br /><br />
            <div style={{width : "100px", height: "100px",margin: "0 auto", backgroundColor : this.state.randomColor}}></div>
            <hr />
        </div>
    )
 }
}

