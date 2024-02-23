import { useState } from "react";

export default function Sample() {
  //   var message = "Hello ReactJS";
  //   var person = {
  //     fname: "Murali",
  //   };
  //   var users = ["ram", "Ravi", "Sam"];
  // When We Declare a variable in ReactJS , we Also declare a function to change the value in That Variable

  const [message, setMessage] = useState("Hello ReactJS");
  // document.getELementById("demo").innerHTML = "Hello"
  return <h2>{message}</h2>;
}
