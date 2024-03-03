import React, { Component } from "react";

export class ImageToggling extends Component{
    constructor(){
        super()

        this.state={
            imgUrl:"https://t3.ftcdn.net/jpg/06/05/37/40/240_F_605374009_hEUHatmKPzuHTIacg7rLneAgnLHUgegM.jpg",
            altTxt:"Cat",
        }
    }
    handleclick=()=>{
        if(this.state.imgUrl === "https://t3.ftcdn.net/jpg/06/05/37/40/240_F_605374009_hEUHatmKPzuHTIacg7rLneAgnLHUgegM.jpg" ){
            this.setState({
                imgUrl:"https://as2.ftcdn.net/v2/jpg/02/21/98/37/1000_F_221983729_t26OxRAMl06ccTRiMlB0gLuA941MWNUF.jpg",
                altTxt:"dog",
            })
        }
        else{
            this.setState({
                imgUrl:"https://t3.ftcdn.net/jpg/06/05/37/40/240_F_605374009_hEUHatmKPzuHTIacg7rLneAgnLHUgegM.jpg",
                altTxt:"cat",
            })

        }
    }
    render(){
        return <div>
            <h1 style={{color:"red"}}>Scenario_18</h1>
            
            <img style={{cursor:"pointer", height:"200px", width:"200px"}}  src={this.state.imgUrl} alt={this.state.altTxt} onClick={this.handleclick}/> <hr />
        </div>
    }
}