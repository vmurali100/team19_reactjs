import React, { Component } from 'react'

export default class ImageComp extends Component {
  render() {
    return (
      <div>
        <img src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.1.1559427031.1691558051&semt=sph" alt="" />
      </div>
    )
  }
  componentWillUnmount(){
    console.log("componentWillUnmount Called !!")
  }
}