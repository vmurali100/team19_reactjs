import React, { Component } from 'react'

export default class Student1 extends Component {
    constructor() {
        super();
        this.state = {
            Student1: {
                name: "john Doe",
                email: "johnDoe@example.com"
            }
        }
    }
    render() {
        return (
            <div> 
                <ul>
                    {Object.values(this.state.Student1).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
                <hr />
            </div>
        )
    }
}
