import React, { Component } from "react";
import { connect } from "react-redux";
import {getUserAsyncAction } from "./action";

class Users extends Component {
  getUsers = () => {
    console.log(this.props)
    this.props.dispatch(getUserAsyncAction())
  }
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        <table border={1} style={{width:'100%'}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {
            this.props.allUsers.map((usr)=>
                <tr>
                    <td>{usr.id}</td>
                    <td>{usr.email}</td>
                    <td>{usr.username}</td>
                    <td>{usr.password}</td>
                    <td>
                        <button>Edit</button>
                    </td>
                    <td>
                        <button>Delete</button>
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