import { Component } from "react";

export class Emoji extends Component{
    constructor(){
        super();
    this.state = {
       emoji : "https://media.istockphoto.com/id/1403022697/vector/cartoon-emoticon-face-icon-hiding-behind-hands.jpg?s=612x612&w=0&k=20&c=ue8IeOSCkYfm_gu_Gf7MvXToZ-6oBvoBpxQipIiF9GA="

    }
}
handleHappyEmoji = () =>{
    this.setState({
        emoji : "https://media.istockphoto.com/id/1388186992/vector/yellow-happy-face-vector-symbol-icon.jpg?s=2048x2048&w=is&k=20&c=ZzwOZZe8wu7ua7CLpT-olQbdwKtaG4foRXZw1lzsqmE="
    })
}

handleSadEmoji = () =>{
    this.setState({
        emoji : "https://media.istockphoto.com/id/1417947367/vector/3d-yellow-sad-crying-emoticon-isolated.jpg?s=612x612&w=0&k=20&c=2uNNOkq3iWvG8d0YFA3iyPbvSwNTLd_dpvcAwuLnwV4="
    })
}
handleResetEmoji = () =>{
    this.setState({
        emoji : "https://media.istockphoto.com/id/1403022697/vector/cartoon-emoticon-face-icon-hiding-behind-hands.jpg?s=612x612&w=0&k=20&c=ue8IeOSCkYfm_gu_Gf7MvXToZ-6oBvoBpxQipIiF9GA="

    })
}

render(){
    return(
        <div>
            <h2 style={{color:"green"}}>Scenario 20</h2>
            <img src={this.state.emoji} style={{width : "100px", height : "100px"}}alt="" /> <br />
            <button onClick={this.handleHappyEmoji} style={{marginRight:"15px"}}>Click To Change Happy Emoji</button>
            <button onClick={this.handleSadEmoji} style={{marginRight:"15px"}}>Click To Change Sad Emoji</button>
            <button onClick={this.handleResetEmoji}>Reset</button>
            <hr />
        </div>
    )


}
}