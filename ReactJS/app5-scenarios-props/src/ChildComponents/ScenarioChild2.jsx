import { Component } from "react";

export class NewMessageClass extends Component{
     constructor(props){
        super(props);

     }
render(){
    return(
        <div>
            <h2>{this.props.newMsgClass}</h2>
        </div>
    )
}
}
