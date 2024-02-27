import { Component } from "react";

export class Employe extends Component() {
    constructor() {
        super();
        this.state = {
            message: " hello",
        }
    }
    handlechangemessage = () => {
        this.setState({
            message: "I am living from chittoor"
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handlechangemessage}>change message</button>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}
export default Employe