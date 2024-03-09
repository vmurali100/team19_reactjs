import React from "react";
import SuperChildComp from "./SuperChildComp";

const SuperParent = ({msg}) => {
    // console.log("Message In Super Parent - ",msg)
  return (
    <div className="super-parent">
      <h2>Welcome to Super Parent Component </h2>
      {/* <SuperChildComp msg={msg}/> */}
      <SuperChildComp/>
    </div>
  );
};

export default SuperParent;
