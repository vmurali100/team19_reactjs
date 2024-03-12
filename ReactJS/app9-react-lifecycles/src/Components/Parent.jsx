import { Component } from "react";
import { Child } from "./Child";

export class Parent extends Component{
    constructor(){
      super();

      this.state = {
        count : 0
      };

      console.log("constructor method called !! in Parent")
    }

static getDerivedStateFromProps(){
  console.log("getDerivedStateFromProps Called!!! in Parent" );
  return null
}
handleCount = () =>{
  this.setState({count : this.state.count + 10})
}
render(){
  console.log("Render Method Called in parent")
  return(
    <div>
      <h2>Welcome to Parent Component</h2>
      <button onClick={this.handleCount}>Change Count</button>
      <hr />
      <Child count = {this.state.count}/>
      </div>

  )
}
componentDidMount(){
  console.log("ComponentDidMount Called in Parent!!")
}

}