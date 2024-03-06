import React, { Component } from "react";

export default class SuperChild extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
    };
    console.log(props);
  }
//   static getDerivedStateFromProps(props, state) {
//     console.log("props from Parent is : ", props);
//     console.log("State in Child ", state);
//     console.log(props.products * 5);
//     return {
//       newVal: props.products * 5,
//     };
//   }
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
