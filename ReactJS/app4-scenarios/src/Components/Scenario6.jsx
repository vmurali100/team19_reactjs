import { Component } from "react";

export class Product extends Component{
    constructor(){
        super();
    this.state = {
        product : {}
    }
    }
 handleObj = () =>{
    this.setState({
        product : {
            name : "shirt",
            price : 1000,
            brand : "RoadSter"
        }
    })
 }

    render(){
        return(
            <div>
                <button onClick={this.handleObj}>Display Product</button>
                <ul>
                    {Object.values(this.state.product).map((obj)=>{
                        return <li>{obj}</li>
                    })}
                </ul>
            </div>
        )
    }
}