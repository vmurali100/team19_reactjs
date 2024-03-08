import react, { Component } from "react";

export class DisplayMsg extends Component{
    constructor(props){
        super()
        
    }
    render(){
        return <div>
            <h1 style={{color:"blue"}}>{this.props.newmsg}</h1>


        </div>
    }
}