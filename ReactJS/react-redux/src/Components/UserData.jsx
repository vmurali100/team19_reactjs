import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserData extends Component {
    render() {
        const { userDetails } = this.props

        return (
            <div>
                <ul>
                    {Object.keys(userDetails).map((key) => (
                        <li key={key}>{key+" "+":"}{userDetails[key]}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { userDetails: state.userDetails }

}
export default connect(mapStateToProps)(UserData)
