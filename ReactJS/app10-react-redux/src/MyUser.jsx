import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "./actions";

class MyUser extends Component {
  render() {
    return (
      <div>
        <h2>Welcome To My User Component </h2>
        <button
          onClick={() => {
            this.props.handlerAddUser(addUser());
          }}
        >
          Add User
        </button>
        <ul>
          {this.props.users.map((usr, i) => {
            return <li key={i}>{usr}</li>;
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch){
    return {
        handlerAddUser:()=>dispatch(addUser())
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(MyUser);
