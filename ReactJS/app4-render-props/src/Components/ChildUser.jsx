import React from "react";

const ChildUser = (props) => {
  return (
    <div>
      <h2>Welcome to Child User</h2>
      {props.render()}
    </div>
  );
};

export default ChildUser;
