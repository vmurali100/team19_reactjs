import React, { Component } from "react";
import { Userform07 } from "./Form07";
import { UserTable07 } from "./UserTable07";

export class Usercrud07 extends Component{
    constructor(){
        super()
        this.state={
            user:{
                fname:"",
                lname:"",
                email:""
            },
            users:[],
            index:null,
        }
    }

    handlechange=(e)=>{
        const newuser={...this.state.user};
        newuser[e.target.name]=e.target.value;
        this.setState({user:newuser})
    }
    handleAddUser=()=>{
        const newusers=[...this.state.users];
        newusers.push(this.state.user);
        this.setState({users:newusers})
        this.handleClear();

    }
    handleedit=(val,i)=>{
        this.setState({
            index:i,user:val
        })
    }
  

    handleClear(){
        this.setState({
            user:{
                fname:"",
                lname:"",
                email:""
            }
        })
    }
    handleUpdate =()=>{
        const newusers=[...this.state.users]
        newusers[this.state.index]=this.state.user
        this.setState({
            users:newusers,index:null
        })
        this.handleClear();
    }
    render(){
        const {user,users, index }=this.state;
        const {handlechange,handleAddUser,handleedit,handleUpdate}=this
        return <div>
            <Userform07 user={user} handlechange={handlechange} handleAddUser={handleAddUser} handleedit={handleedit} handleUpdate={handleUpdate}/>
            <UserTable07 users={users}  handleedit={handleedit}  />

        </div>
    }
}