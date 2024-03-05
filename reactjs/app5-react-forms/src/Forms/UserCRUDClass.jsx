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
        { fname: 'naveen', lname: 'navi', email: "naveen@gmail.com" },
        { fname: 'poornima', lname: 'poori', email: 'poori@gmail.com' },
        { fname: 'vanitha', lname: 'vanitha', email: 'vanitha@gmail.com' },
        { fname: 'anusha', lname: 'anu', email: 'anusha@gmail.com' },
        { fname: 'lokesh', lname: 'loki', email: 'lokesh@gmail.com' }
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
      users: newUsers, index: null
    })
    this.handleClear()

  };
  handleDelete = (usr, i) => {
    console.log("handleDelete Called !!!", usr, i)
    this.setState({ users: this.state.users.filter((us) => us.fname !== usr.fname) })
  };
  handleEdit = (usr, i) => {
    console.log(usr, i)
    this.setState({
      index: i, user: usr
    })
  };
  handleClear = () => {
    this.setState({
      user: {
        fname: "",
        lname: "",
        email: "",
      }
    })
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