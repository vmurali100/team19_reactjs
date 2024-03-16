import React from "react";
import SuperParent from "./SuperParent";

const MainComponent=({msg})=>{
    return <div className="main-comp">
        <h1>Welcome to MainComponent!</h1>
        {/* <SuperParent msg={msg}/> */}
        <SuperParent/>
        
    </div>

}
export default MainComponent;