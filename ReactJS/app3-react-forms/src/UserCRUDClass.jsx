import React, { Component } from "react";
import UsersForm from "./UsersForm";
import UsersTable from "./UsersTable";

export default class UserCRUDClass extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
      },
      index: null,
      users: [
        { fname: 'John', lname: 'Doe', email: 'john.doe@example.com' },
    { fname: 'Jane', lname: 'Doe', email: 'jane.doe@example.com' },
    { fname: 'Alice', lname: 'Smith', email: 'alice.smith@example.com' },
    { fname: 'Bob', lname: 'Johnson', email: 'bob.johnson@example.com' },
    { fname: 'Emily', lname: 'Brown', email: 'emily.brown@example.com' }
      ],
    };
  }
  handleChange = (e) => {
    console.log(e);
    const newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handleAddUser = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    this.handleClear()
  };
  handleUpdate = () => {
    const newUsers = [...this.state.users];

    newUsers[this.state.index] = this.state.user

    this.setState({
      users:newUsers,index:null
    })
    this.handleClear()

  };
  handleDelete = (usr,i) => {
    console.log("handleDelete Called !!!",usr,i)
    this.setState({users:this.state.users.filter((us)=>us.fname !== usr.fname)})
  };
  handleEdit = (usr,i) => {
    console.log(usr,i)
    this.setState({
      index:i,user:usr
    })
  };
  handleClear=()=>{
    this.setState({user:{
      fname: "",
      lname: "",
      email: "",
    }})
  }
  render() {
    const { user, users, index } = this.state;
    const {
      handleChange,
      handleAddUser,
      handleDelete,
      handleEdit,
      handleUpdate,
    } = this;
    return (
      <div>
        <UsersForm
          user={user}
          handleChange={handleChange}
          index={index}
          handleAddUser={handleAddUser}
          handleUpdate={handleUpdate}
        />
        <hr />
        <UsersTable
          users={users}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    );
  }
}
