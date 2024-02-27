import { Component } from "react";
import Person2 from "./Person2";

export class Student2 extends Component {
    constructor() {
        super();
        this.state = {
            message: "welcome to class Componente!! ",
            Person: {},
            Users: [],
        };
    }
    handlechangemessage = () => {
        this.setState({
            message: "i am new message chainged by set state method"
        });
    };
    handleDisplayPerson = () =>{

                this.setState({
                    Person : {
                    name : "nani",
                    email : "nani@gmail.com",
                    address : "Chittor"
             }})
        
            }
        
            handleDisplayUsers = () => {
                this.setState({
                 Users: ["Html", "Css", "Javascript", "ReactJS"]
                })
            }
    render() {
        return (
            <div>
                <button onClick={this.handlechangemessage}>chaing message</button>
                <h2>{this.state.message}</h2>;
                <br />
                <button onClick={this.handleDisplayPerson}>Display Person</button>
            <ul>
                {Object.values(this.state.Person).map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <br />
            <button onClick={this.handleDisplayUsers}>Display Users</button>
            <ul>
                {this.state.Users.map((val)=>{
                   return <li>{val}</li>
                })}
            </ul>
         </div>

            
        );
    }


}
export default Student2
