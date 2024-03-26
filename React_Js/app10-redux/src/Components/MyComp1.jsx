import React, { Component } from 'react'
import { connect } from 'react-redux'

class MyComp1 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome to MyComp1</h1>
        <ul>
            {this.props.sandyuser.map((san,i)=>{
                return <li key={i}>{san}</li>

            })}
        </ul>
        <ul>
        </ul>
     
      </div>
    )
}
}
function mapStateToProps(state){
    return {
        sandyuser:state.users
    }

}
export default connect(mapStateToProps)(MyComp1)
