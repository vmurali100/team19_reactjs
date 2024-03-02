import React, { Component } from 'react'

export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            Person: {
                name: "Shirt",
                price: 25.99
            }
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.state.Person).map((val)=>{
                        return <li>{val}</li>
                    })}
                </ul>
                <hr />

            </div>
        )
    }
}