import {Component} from "react";

export class UserFormClass extends Component{
    constructor(){
        super();
        this.state={
          user:{
            fname:"",
            lname:"",
          } 
        };
    }

    handleChange=(e)=>{
        const newObj={...this.state.user};
        // console.log(e)
        newObj[e.target.name]=e.target.value;
        this.setState({user : newObj})
    };
    handleAddUser=()=>{
        console.log(this.state.user )
    }
    render(){
        return(
            <>
            <form>
                <label htmlFor="fname">first Name:</label>
                <input type=" text" name="fname" value={this.state.user.fname} onChange={this.handleChange}
                />{""}
                <br />
                <label htmlFor="fname">last Name:</label>
                <input type="text" name="lname" value={this.state.user.lname} onChange={this.handleChange}
                />{""}
                <br />
                <button onClick={this.handleAddUser} type="button">Add user</button>
            </form>
            </>
        );
    }
}