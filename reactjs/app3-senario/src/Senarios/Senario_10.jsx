import { Component } from "react";


export default class Student2 extends Component{

constructor(){
    super();
    this.state={
        message1:false,
        message2:false
    }
}
handlechangebtn=()=>{
    this.setState({
        message1:true
    })
}
handlechangebtn2=()=>{
    this.setState({
        message2:true
    })
}
render(){
    return(
        <div>
            <button onClick={this.handlechangebtn} style={{color:"red"}}>
                {this.state.message1 ? "clicked!!":"click me"}
            </button>
            <br />
            <button onClick={this.handlechangebtn2} style={{color:"blue"}}>
                {this.state.message2 ? "nothing!!":"click me"}
            </button>
            <hr />
        </div>
    )
}
}