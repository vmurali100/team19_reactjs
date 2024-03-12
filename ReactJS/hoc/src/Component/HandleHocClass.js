import React, { Component } from 'react'
import { HocClass } from './HocClass'

class HandleHocClass extends Component {
    render() {
        const { users } = this.props
        return (
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fname</th>
                            <th>lanme</th>
                            <th>address</th>
                            <th>city</th>
                            <th>state</th>
                            <th>tel</th>
                            <th>zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((usr, id) => (
                            <tr key={id}>
                                <td>{usr.id}</td>
                                <td>{usr.fname}</td>
                                <td>{usr.lname}</td>
                                <td>{usr.address}</td>
                                <td>{usr.city}</td>
                                <td>{usr.state}</td>
                                <td>{usr.tel}</td>
                                <td>{usr.zip}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HocClass(HandleHocClass)
