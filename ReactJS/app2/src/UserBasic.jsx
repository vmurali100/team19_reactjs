import { useState } from "react";

export default function UserBasic() {
  const [message, setMessage] = useState("Hello World");
  const [user, setUser] = useState({
    fname: "Nani",
    lname: "Kumar",
    email: "nani@gmail.com",
  });
  const [students, setStudents] = useState([
    "seetha",
    "geetha",
    "ravi",
    "gopi",
  ]);

  return (
    <div>
      <h2>{message}</h2>
      <hr />
      <ul>
        <li>{user.fname}</li>
        <li>{user.lname}</li>
        <li>{user.email}</li>
      </ul>
      <ul>
        <li>{students[0]}</li>
        <li>{students[1]}</li>
        <li>{students[2]}</li>
        <li>{students[3]}</li>
      </ul>
      <img
      src="https://media.istockphoto.com/id/1828592428/photo/new-year-and-christmas-concept-on-snowy-landscape.jpg?s=1024x1024&w=is&k=20&c=voYtyJAaiQYzzb3uFyU_pePVs2uNyPnPOXQ4WsLCR9g="
        alt=""
        style={{border : "5px solid black", padding : "5px"}}
      />
    </div>
  );
}
