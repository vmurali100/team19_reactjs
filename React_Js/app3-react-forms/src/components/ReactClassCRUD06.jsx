import React, { Component } from "react";
import { Table } from "./UserTable06";
import { Userform } from "./Form06";

export class Usercrud06 extends Component{
    constructor(){
        super()
        this.state={
            user:{
                fname:"",
                lname:"",
                email:"",
            },
            users:[
                {fname:"sandy",lname:"S",email:"sandy123@gmail.com"},
                {fname:"Amar",lname:"S",email:"Amar123@gmail.com"},
                {fname:"Virat",lname:"S",email:"Virat123@gmail.com"},
                {fname:"Neeraj",lname:"S",email:"Neeraj@123@gmail.com"},
            ],
            index:null,
        }

    }
    handlechange=(e)=>{
        const newUser={...this.state.user}
        newUser[e.target.name]=e.target.value;
        this.setState({user:newUser});
    };
    handleedit=(Val,i)=>{
        this.setState({
            index:i,user:Val
        })
    };
    handledelete=(Val)=>{
        this.setState({users:this.state.users.filter((us)=>us.fname !== Val.fname)})
    };
    addUser=()=>{
        const newusers=[...this.state.users]
        newusers.push(this.state.user)
        this.setState({users:newusers})
        this.handleClear()
    };

    UpdateUser=()=>{
        const newusers=[...this.state.users]
        newusers[this.state.index]=this.state.user
        this.setState({
            users:newusers,index:null
        })
        this.handleClear();
    };
    handleClear=()=>{
        this.setState({user:{
            fname:"",
            lname:"",
            email:"",

        }})
    }
    render(){
        
        const {user,index,users}=this.state;
        const {handlechange,handleedit,handledelete,addUser,UpdateUser,handleClear}=this
        return <div>
            <Userform user={user} handlechange={handlechange} index={index} addUser={addUser} UpdateUser={UpdateUser} handleClear={handleClear} />
            <Table users={users} handleedit={handleedit} handledelete={handledelete} UpdateUser={UpdateUser}/>
        </div>
 
    }
}