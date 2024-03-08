import React, { Component } from "react";

export class UserCrud02 extends Component{
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
        const newsate={...this.state}
        newsate[e.target.name]=e.target.value;
        this.setState(newsate)
    }

    adduser=()=>{
        console.log(this.state)
    }
    render(){
        return <div>
            <h1>ReactCRUD02</h1>
            <form>
                    <label htmlFor="fname">fname:</label>
                    <input type="text" name="fname" value={this.state.fname} onChange={ this.handlechange}/> <br /> <br />
                    <label htmlFor="fname">lname:</label>
                    <input type="text" name="lname" value={this.state.lname} onChange={ this.handlechange}/>  <br /> <br />
                    <label htmlFor="fname">age: </label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handlechange}/> <br /> <br />
                    <label htmlFor="fname">email: </label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handlechange}/> <br /> <br />
                    <button onClick={ this.adduser} type="button">adduser</button>
        </form>
        </div>
    }
}

