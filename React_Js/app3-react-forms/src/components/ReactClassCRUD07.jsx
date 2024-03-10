import React, { Component } from "react";
import { UserForm_07 } from "./Form07";
import { UserTable_07 } from "./UserTable07";

export class Usercrud_07 extends Component{
    constructor(){
        super()
        this.state={
            user:{
                fname:"",
                lname:"",
                email:""
            },
            users:[
                {fname:"sandy",lname:"s",email:"sandy@gmail.com"},
                {fname:"Amar",lname:"s",email:"Amar@gmail.com"},
                {fname:"Virat",lname:"s",email:"Virat@gmail.com"},
                {fname:"Sekar",lname:"s",email:"Sekar@gmail.com"},
                {fname:"Hulk",lname:"s",email:"Hulk@gmail.com"},
            ],
            index:null
        }
    }

    handlechange =(e)=>{
        const newuser={...this.state.user}
        newuser[e.target.name]=e.target.value;
        this.setState({user:newuser})
    }
    handleaddUser=()=>{
        console.log(this.state.user)
        const newusers=[...this.state.users]
        newusers.push(this.state.user)
        this.setState({users:newusers})
        this.handleclear()
    }

    handleedit=(val,i)=>{
        this.setState({
            index:i,user:val
        })
    }
    handleUpdateuser=()=>{
        const newusers=[...this.state.users]
        newusers[this.state.index]=this.state.user
        this.setState({users:newusers,index:null})
        this.handleclear()

    }
    handledelete=(val,i)=>{
        // deleting with splice 
        // this.setState(this.state.users.splice(i,1))

        // deleting with filter
        this.setState({users:this.state.users.filter((va)=>va.fname!== val.fname )})
    }

    handleclear=()=>{
        this.setState({
            user:{
                fname:"",
                lname:"",
                email:""
            }
        })
    }
        render(){
        const {user,index,users}=this.state;
        const {handlechange,handleaddUser,handleedit,handledelete,handleUpdateuser,handleclear}=this
        return <div>
            <UserForm_07 user={user} handlechange={handlechange} index={index} handleaddUser={handleaddUser} handleUpdateuser ={handleUpdateuser} handleclear={handleclear}/>
            <UserTable_07 users={users} handleedit={handleedit} handledelete={handledelete} user={user}/>
        </div>
    }
}