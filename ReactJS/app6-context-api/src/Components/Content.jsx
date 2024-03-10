import React from "react";
import { UserContext } from "../UserContext";

const Content = ({ msg }) => {
  console.log("Message in Content Comp - ", msg);
  return (
    <UserContext.Consumer>
      {(message) => {
        return (
          <div className="content-comp">
            <h2>Content Comp</h2>
            <p>{message}</p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Content;
