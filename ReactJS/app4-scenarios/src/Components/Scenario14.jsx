import { Component } from "react";

export class Person extends Component{
    constructor(){
        super();
    this.state = {
        person : {
            name : "Alice",
            age : 30
        }
    }
    }


render(){

    return(
        <div>
            <h2 style={{color: "green"}}>Scenario 14</h2>

            <h6>Person Info</h6>
            <p>Name : {this.state.person.name}</p>
            <p>Age : {this.state.person.age}</p>
            <hr />
        </div>
    )
}
}