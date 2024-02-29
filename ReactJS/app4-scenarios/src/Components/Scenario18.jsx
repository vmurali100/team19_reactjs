import { Component } from "react";

export class DisplayImage extends Component{
    constructor(){
        super();
    this.state = {
        img : "https://media.istockphoto.com/id/514515260/photo/neva-masquerade-looking-at-the-camera-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=pcwhF4nhvUWGhmup4U0VO3D7kNIQ7Zg0OdL5VrnYNLY=",
        message : false
 }
 }
handleClick = () =>{
    this.state.message ? this.changeImageToCat() : this.changeImageToDog()
}

changeImageToCat = () =>{
    this.setState({
        img : "https://media.istockphoto.com/id/514515260/photo/neva-masquerade-looking-at-the-camera-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=pcwhF4nhvUWGhmup4U0VO3D7kNIQ7Zg0OdL5VrnYNLY=",
        message : false
    })
}

changeImageToDog = () =>{
    this.setState({
        img : "https://media.istockphoto.com/id/1306641965/photo/cobberdog-pup-on-white-background.jpg?s=1024x1024&w=is&k=20&c=BADWgiZceV44rSE9US8sQ28sQpqfnTFs5OhRkB5fNlc=",
        message : true
    })
}
render(){
    return(
        <div>
            <h2 style={{color:"green"}}>Scenario 18</h2>
            <img src={this.state.img} alt="" style={{width: "100px", height:"100px"}}/>
            <button onClick={this.handleClick}>
             {this.state.message ? "Change Image To Cat" : "Change Image To Dog"}
            </button>
            <hr />
        </div>
    )
}
}