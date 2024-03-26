import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mycomp extends Component {
    constructor(props) {
      super(props)
    }
    
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>MyComp</h1>
        <ul>
          {this.props.shanthosUsers.map((usr,i)=>{
            return <li key={i}><h2>{usr}</h2></li>
          })}
        </ul>
      </div>
    )
    
  }
}

function mapStateToProps(state){
  return{
    shanthosUsers:state.users
  }
}


export default connect(mapStateToProps) (Mycomp)
