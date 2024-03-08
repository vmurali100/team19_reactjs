import React from "react";

export function DisplayArrays(props){
    return <>
    {props.newArray.map((val,index)=>{
        return <li key={index}>{val}</li>
    })}

    
    </>
   
}