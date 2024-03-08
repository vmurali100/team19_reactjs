import React, { Component } from "react";

export class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            Product:{
                name:"Shirt",
                price: 25.99
            }
        };
    }
   render(){
     return <div>
        <h1 style={{color:"red"}}>Secenario 6</h1>
        <p style={{color:"green", fontSize:"25px", fontWeight:"bold"}}>Name:{this.state.Product.name}</p>
        <p style={{color:"green", fontSize:"25px", fontWeight:"bold"}}>Price: ${this.state.Product.price}</p> <hr />
     </div>
   }
}