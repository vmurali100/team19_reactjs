import { Component } from "react";

export class DisplayImage extends Component{
    constructor(){
        super();
    this.state = {
        img : "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        message : false
 }
 }
handleClick = () =>{
    this.state.message ? this.changeImageToCat() : this.changeImageToDog()
}

// changeImageToCat = () =>{
//     this.setState({
//         img : "https://media.istockphoto.com/id/514515260/photo/neva-masquerade-looking-at-the-camera-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=pcwhF4nhvUWGhmup4U0VO3D7kNIQ7Zg0OdL5VrnYNLY=",
//         message : false
//     })
// }

changeImageToDog = () =>{
    this.setState({
        img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlW0seKvyp3DUSOaLjYSbSjTFOdhjH4-hBfC8btKVqtw&s",
        message : true
    })
}
render(){
    return(
        <div>
            <h2 style={{color:"green"}}>images chainges</h2>
            <button onClick={this.handleClick}>
             {this.state.message ? "Change Image To Cat" : "Change Image To Dog"}
            </button>
            <img src={this.state.img} alt="" style={{width: "100px", height:"100px"}}/>
           
            <hr />
        </div>
    )
}
}