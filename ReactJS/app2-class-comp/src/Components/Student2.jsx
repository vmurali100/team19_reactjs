import { Component } from "react";

export class Student2 extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Class Component !!! ",
      person: {},
      users: [],
    };
  }
  handleChangeMessage = () => {
    this.setState({
      message: "I am new Message Changed By Set State Method !!!",
    });
  };
  handleObjectChange = () => {
    this.setState({
      person: {
        fname: "Ram",
        lname: "Krishna",
        email: "Ram@gmail.com",
      },
    });
  };
  handleUsersDisplay = () => {
    this.setState({ users: ["Ram", "Ravi", "Sam", "Sundar"] });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleChangeMessage}>Change Message</button>
        <h2>{this.state.message}</h2>
        <hr />
        <button onClick={this.handleObjectChange}>Change Object Values</button>
        <ul>
          {Object.values(this.state.person).map((val) => {
            return <li>{val}</li>;
          })}
        </ul>
        <hr />
        <button onClick={this.handleUsersDisplay}>Display Users</button>
        <ul>
          {this.state.users.map((usr) => {
            return <li>{usr}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Student2;
