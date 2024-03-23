import React, { Component } from "react";

export default class UserClass2 extends Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
        };
    }
    handlechange=(e)=>{
        console.log(e) 
        const newObj={...this.state};
        newObj[e.target.name]=e.target.value;
        this.setState(newObj) ;
    };
    handleadduser=()=>{
      console.log(this.state)
    }
 render(){
    return(
        <div>
            <h1>Welcome to ReactClassForm2..!</h1>
            <form>
            <label htmlFor="fname">First Name:</label>
            <input type="text" name='fname' value={this.state.fname} onChange={this.handlechange} /> <br />
            <label htmlFor="lname">Last Name:</label>
            <input type="text" name='lname' value={this.state.lname} onChange={this.handlechange} /> <br /> <br />
            <button type='button' onClick={this.handleadduser}>Add User</button>
        </form>
        </div>
    )
 }
}