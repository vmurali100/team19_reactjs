import React,{ Component } from "react";
  
export class Person extends Component{
    constructor(){
        super();
    }   
    render(){
        return <div>
             <h1 style={{color:"red"}}>Secnario 2</h1>
            <h1 style={{color:"green"}}>Iam From Class Component..!</h1> <hr />
        </div>
    }
}