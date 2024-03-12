import React, { Component } from "react";
import { SuperChildComponent } from "./SuperChild";
import { SuperChildUpdate } from "./SuperChildUpdate";

export class SuperParentComponent extends Component{
    constructor(){
        super()
        this.state={
            products:18
        }
    }
    render(){
        return(
            <div> 
                <h1>Welcome to SuperParent Component..!!!</h1>
                {/* <SuperChildComponent products={this.state.products}/> */}
                <button onClick={()=>{this.setState({products:28})}}>Increase Qty</button>
                <SuperChildUpdate products={this.state.products}/>

            </div>
        )
    }
}