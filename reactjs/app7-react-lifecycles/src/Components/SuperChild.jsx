import React, { Component } from "react";

export default class SuperChild extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
    console.log(props);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Total Cost is {this.state.newVal}</h3>
        <ul>
            {this.state.users.map((usr)=>{
                return <li>{usr.fname}</li>
            })}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    fetch("http://localhost:3200/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      });
  }
}