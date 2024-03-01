// import React, { useCallback, useState } from "react";

// export function ManagingState(){
//     const [message,setmessage]=useState("Welcome");
//     const handlemessage=()=>{
//         setmessage("GoodBye..!!!")
//     }
//     return <div>
//         <h1 style={{color:"red"}}>Scenario_04</h1>
//         <button onClick={handlemessage}> clickme</button>
//         <h2>{message}</h2>
//     </div>
// }

import React, { Component } from "react";

export class ManagingState extends Component{
    constructor(){
        super();
        this.state={
            message:"Welcome",
            student:{},
            studentinfo:[],
        }
    }
    handlemessage=()=>{
        this.setState({
            message:"GoodBye...!!!"
        })
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>Scenario_04</h1>
            <button onClick={this.handlemessage}> clickme</button>
            <h2>{this.state.message}</h2>
            <hr />
        </div>
    }
}

