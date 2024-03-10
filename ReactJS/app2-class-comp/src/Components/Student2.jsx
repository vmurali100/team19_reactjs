import { Component } from "react";
import DisplayMessage from "./DisplayMessage";
import DisplayObjectDetails from "./DisplayObjectDetails";
import DisplayUsers from "./DisplayUsers";

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
        <DisplayMessage newMsg = {this.state.message}/>
        <hr />
        <button onClick={this.handleObjectChange}>Change Object Values</button>
        <ul>
          <DisplayObjectDetails newObj={this.state.person}/>
        
        </ul>
        <hr />
        <button onClick={this.handleUsersDisplay}>Display Users</button>
        <ul>
        <DisplayUsers newUsers={this.state.users}/>
        </ul>
      </div>
    );
  }
}

export default Student2;
