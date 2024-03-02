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
                 <h2 style={{color: "green"}}>Scenario 6</h2>
                 <ul>
                    {Object.values(this.state.product).map((obj)=>{
                        return <li>{obj}</li>
                    })}
                </ul>
                <button onClick={this.handleObj}>Display Product</button>

                <hr />
            </div>
        )
    }
}