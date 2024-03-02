import { Component } from "react";

export class Persons extends Component{
    constructor(){
        super();
    this.state = {
        persons : {
            name : "Alice",
            age : 30
        }
    }
    }


render(){

    return(
        <div>
            <h2 style={{color: "pink"}}>Scenario 14</h2>

            <h3>Persons Info</h3>
            <p>Name : {this.state.persons.name}</p>
            <p>Age : {this.state.persons.age}</p>
            <hr />
        </div>
    )
}
}