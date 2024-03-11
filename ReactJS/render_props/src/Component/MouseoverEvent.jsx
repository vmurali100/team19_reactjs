import React from 'react'

const MouseoverEvent = (props) => {
    debugger
    console.log(props)
    return (
        <div>

            <h1>MouseoverEvent </h1>
            <button onMouseOver={props.incrementHandler}>Increment</button>
            <br />
            <button onMouseOver={props.decrementHandler}>Decrement</button>
        </div>
    )
}
export default MouseoverEvent
