import { Component } from "react";

export  class Student extends Component{
    constructor() {
        super();
        this.state = {
            message : "Welcome to class component",
            person : {},
            users : []
        }
    }
    handleChangeMessage = ()=>{
        this.setState({
            message : "I am new Message changed by setstate method"
        })
    }
    handleChangeObject = ()=>{
        this.setState({
            person : {
                fname : "Nani",
                email : "nani1505@gmail.com",
                age : 22
            }
        })
    }
  handleChangeArray = () =>{
    this.setState({
        users : [
            "seeta",
            "geeta",
            "rama"
        ]
    })
  }

    render(){
        return(
            <div>
               <button onClick={this.handleChangeMessage}>Change Message</button>
               <h2>{this.state.message}</h2>
               <br />
               <button onClick={this.handleChangeObject}>Display Object</button>
               <ul>
                {Object.values(this.state.person).map((val)=>{
                  return <li>{val}</li>
                })}
               </ul>
               <button onClick={this.handleChangeArray}>Display Array</button>
               <ul>
                {this.state.users.map((usr)=>{
                   return <li>{usr}</li>
                })}
               </ul>
            </div>
        )
    }
}
export default Student;