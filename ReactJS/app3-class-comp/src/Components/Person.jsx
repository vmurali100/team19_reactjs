import { Component } from "react";

export class Person extends Component{
    constructor(){
        super();
      this.state = {
        message : "Hello",
        myObj : {},
        myArr : []
      }
    }

    handleChangeMessage = ()=>{
        this.setState({
            message : "changed by SetState Method"
        })
    }

    handleDisplayObj = () =>{
        this.setState({
            myObj : {
            name : "nani",
            email : "nani@gmail.com",
            address : "Chittor"
     }})

    }

    handleDisplayArr = () => {
        this.setState({
            myArr : ["Html", "Css", "Javascript", "ReactJS"]
        })
    }

    render(){
        return(
            <div>
            <button onClick={this.handleChangeMessage}>Change Message</button>
            <h2>{this.state.message}</h2>
            <br />
            <button onClick={this.handleDisplayObj}>Display Object</button>
            <ul>
                {Object.values(this.state.myObj).map((obj)=>{
                    return <li>{obj}</li>
                })}
            </ul>
            <br />
            <button onClick={this.handleDisplayArr}>Display Array</button>
            <ul>
                {this.state.myArr.map((val)=>{
                   return <li>{val}</li>
                })}
            </ul>
         </div>
        )

    }

}
export default Person;