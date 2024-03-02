import { Component } from "react";

export class Emoji extends Component{
    constructor(){
        super();
    this.state = {
      Emoji :""
    }
}
handleHappyEmoji = () =>{
    this.setState({
        Emoji : "https://www.shutterstock.com/shutterstock/photos/336997097/display_1500/stock-vector-smiling-emoticon-with-happy-eyes-and-rosy-cheeks-336997097.jpg"
    })
}

handleSadEmoji = () =>{
    this.setState({
        Emoji : "https://i.pinimg.com/550x/64/99/4e/64994e619df22acf0ee566799d72365a.jpg"
    })
}


render(){
    return(
        <div>
            <h2 style={{color:"orange"}}>emojes</h2>
            <img src={this.state.Emoji} style={{width : "80px", height : "80px"}}alt="" /> <br />
            <button onClick={this.handleHappyEmoji} style={{marginRight:"15px"}}>Click To Change Happy Emoji</button>
            <button onClick={this.handleSadEmoji} style={{marginRight:"15px"}}>Click To Change Sad Emoji</button>
          
            <hr />
        </div>
    )


}
}