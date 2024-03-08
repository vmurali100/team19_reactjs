// // class componenet

// import React, { Component } from "react";

// export class DisplayingMsg extends Component{
//     constructor(){
//         super()
//         this.state={
//             message:"Welcome..!!!"
//         }
//     }
//     handlemsg=()=>{
//         this.setState({
//             message:"goodbye...!!!!"
//         })
//     }
//     render(){
//         return <div>
//             <h1>{this.state.message}</h1>
//             <button onClick={this.handlemsg}> clickme</button>
//         </div>
//     }

// }

// functional component

import React, { useState } from "react";

export function Displaymsg(){
    const[message,setmessage]=useState("Welcome...!")
    const handlemessage=()=>{
        setmessage("Goodbye..!")
    }
    return <div>
        <h1 style={{color:"red"}}>Secnario 4</h1>
        <h1 style={{color:"green"}}>{message}</h1>
        <button style={{color:"red"}} onClick={handlemessage}>Click me</button> <hr />
    </div>
}