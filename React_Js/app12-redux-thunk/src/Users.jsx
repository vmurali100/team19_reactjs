import React, { Component } from "react";
import { connect } from "react-redux";
import {DeleteUserAsyncAction, getUserAsyncAction } from "./action";

class Users extends Component {
  getUsers = () => {
    console.log(this.props)
    this.props.dispatch(getUserAsyncAction())
  }
  deleteuser=(usr)=>{
    this.props.dispatch(DeleteUserAsyncAction(usr))
  }
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        <table border={1} style={{width:'100%'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th>USERNAME</th>
                <th>PASSWORD</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
        {
            this.props.allUsers && this.props.allUsers.map((usr,i)=>
                <tr>
                    <td key={i}>{usr.id}</td>
                    <td key={i}>{usr.email}</td>
                    <td key={i}>{usr.username}</td>
                    <td key={i}>{usr.password}</td>
                    <td>
                        <button>Edit</button>
                    </td>
                    <td>
                        <button onClick={()=>{this.deleteuser(usr)}}>Delete</button>
                    </td>
                </tr>
            )
        }
        </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allUsers:state.users
  };
};

export default connect(mapStateToProps)(Users);