import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementHandler = () => {
        debugger
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    decrementHandler = () => {
        debugger
        this.setState((prevState)=>({
            count: prevState.count - 1
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                {this.props.render(this.state.count,this.incrementHandler, this.decrementHandler)}
            </div>
        )
    }
}

export default Count