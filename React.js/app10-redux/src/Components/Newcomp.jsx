import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Newcomp extends Component {
    
  render() {
    return (
      <div>
        <h1>Welcome to My Component</h1>
      </div>
    )
  }
  mapStateToProps=()=>{
    return{
      users:state.users
    }
  }
}
export default connect(mapStateToProps)(Newcomp)
