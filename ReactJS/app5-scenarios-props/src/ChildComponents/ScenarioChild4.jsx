import { Component } from "react";

export class NewWelcomeClass extends Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <div>
           <h3>{this.props.newWelcomeMsg}</h3>
           {this.props.getBtn()}
        </div>
    )
}
}