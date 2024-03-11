import React, { Component } from 'react'

class OnclickEvent extends Component {
   
    render() {
        return (
            <div>
                <h1>OnclickEvent</h1>
                <button onClick={this.props.incrementHandler}>Increment</button>
                <br />
                <button onClick={this.props.decrementHandler}>Decrement</button>

            </div>
        )
    }
}

export default OnclickEvent