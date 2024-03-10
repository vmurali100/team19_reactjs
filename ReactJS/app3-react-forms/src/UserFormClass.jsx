import { Component } from "react";

export class UserFormClass extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
    };
  }

  handleChange = (e) => {
    const newObj = { ...this.state };
    console.log(e)
    newObj[e.target.name] = e.target.value;
    this.setState(newObj)

  };

  handleAddUser=()=>{
    console.log(this.state)
  }
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="fname">Last Name : </label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handleChange}
          />{" "}
          <br />
          <br /> <br />
          <button onClick={this.handleAddUser} type="button">Add User</button>
        </form>
      </>
    );
  }
}
