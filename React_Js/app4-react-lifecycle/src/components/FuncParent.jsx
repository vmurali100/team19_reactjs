import React, { useState } from "react";
import FuncChildComponent from "./FuncChild";

const FuncParent=()=>{
    const [products,setproducts]=useState(10);
    return(
        <div>
            <h1>Welcome to FuncParent Component</h1>
            <button onClick={()=>{setproducts(40)}}>Click me</button>

            <FuncChildComponent products={products}/>

        </div>
    )
}
export default FuncParent;