import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyUser extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Welcome To My User Component </h2>
        <ul>
            {this.props.users.map((usr)=>{
                return <li>{usr}</li>
            })}

    </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    console.log(state)
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(MyUser)