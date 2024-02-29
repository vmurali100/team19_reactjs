import { Component } from "react";

export class User extends Component{
    constructor(){
        super();
    this.state = {
        user : {}
    }
    }

    handleDisplayUser = () =>{
        this.setState({
            user :{
                name : "john Due",
                email : "johnDue@gmail.com",
                address : "England"
            }
        })
    }
render(){
    return(
        <div>
            <h2 style={{color: "green"}}>Scenario 8</h2>
            <ul>
                {Object.values(this.state.user).map((obj)=>{
                  return <li>{obj}</li>
                })}
            </ul>
            <button onClick={this.handleDisplayUser}>Display User</button>
            <hr />
        </div>
    )
}
}