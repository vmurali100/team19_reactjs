import React, { Component } from "react";

export class UserClassComponent2 extends Component{
    constructor(){
        super()
        this.state={
           
                fname:"",
                lname:"",
                age:"",
                email:""
        
        }
    }
    handlechange=(e)=>{
        const newuser={...this.state}
        newuser[e.target.name]=e.target.value;
        this.setState(newuser)
    
    }

    adduser=()=>{
        console.log(this.state)
    }

    render(){
        return <div>
            <h1>React_forms With class Component</h1>
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
    }

}