import React from "react";

const DisplayMessage = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.newMsg}</h2>
    </div>
  );
};

export default DisplayMessage;
