import React, { Component } from "react";

export class UserClassComponent extends Component{
    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            age:"",
            email:""
        }
    }
    handlechange=(e)=>{
        const newsstate={...this.state}
        newsstate[e.target.name]=e.target.value
        this.setState(newsstate);
    }
    adduser=()=>{
        console.log(this.state)

    }
    render(){
        return(
            <div>
                <h1>React_Forms Using Class Component...!!!</h1>
                <form>
                    <label htmlFor="fname">fname:</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={this.handlechange}/> <br /> <br />
                    <label htmlFor="fname">lname:</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={this.handlechange}/>  <br /> <br />
                    <label htmlFor="fname">age: </label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handlechange}/> <br /> <br />
                    <label htmlFor="fname">email: </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handlechange}/> <br /> <br />
                    <button onClick={ this.adduser} type="button">adduser</button>
                    
                </form>
            </div>
        )
    }
}