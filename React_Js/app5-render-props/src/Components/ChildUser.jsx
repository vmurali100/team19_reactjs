import React from "react";

const ChildUser=(props)=>{
    return <>
    <h1>Welcome to ChildUser...!!!</h1>
    {props.render}
    </>
}
export default ChildUser