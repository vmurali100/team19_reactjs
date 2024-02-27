import { useState } from "react";

export default function User() {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to ReactJS");
  const [user, setUser] = useState({
    fname: "m.swapna",
    lname: "swapna",
    email: "smswapna@gmail.com",
  });
  
  const [students, setStudents] = useState([
    "anusha",
    "pavithra",
    "harsha",
    "poori",
    "swapna",
  ]);
  

  return (

    <div>
      <h2>{welcomeMessage}</h2>
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
        <li>{students[4]}</li>
      </ul>
      
      <img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt=""
        srcset=""
        style={{ width: "150px", border: "2px solid red", padding: "5px" }}
      />
      

      <table style={{ width: "100%" }} border={1}>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>items</td>
          <td>items</td>
          <td>items</td>
        </tr>
        <tr>
          <td>items1</td>
          <td>items2</td>
          <td>items3</td>

        </tr>
      </table>
    </div>
  );
}