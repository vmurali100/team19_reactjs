import { useState } from "react";

export default function VMRStudent() {
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to ReactJS");
  const [user, setUser] = useState({
    fname: "Murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  });
  const [students, setStudents] = useState([
    "Ram",
    "Ravi",
    "Sam",
    "Sundar",
    "Raghu",
  ]);
  return (
    <div>
      <h2>{welcomeMessage}</h2>
      <hr />
      <p>Display Object With Map Method ::</p>
      <ul>
        {Object.values(user).map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
      <hr />
      <p>Display Students with Map Statement :--</p>
      <ul>
        {students.map((student) => {
          return <li>{student}</li>;
        })}
      </ul>
      <img
        src="https://media.istockphoto.com/id/895454734/photo/beautiful-lotus-flower-on-the-water-in-a-park-close-up.jpg?s=2048x2048&w=is&k=20&c=BMCNvYbtGfySorWiIV-ZA9ufKJwhqk3LtdleXN2fBBY="
        alt=""
        srcset=""
        style={{ border: "2px solid red", padding: "5px" }}
      />

      <table style={{ width: "100%" }} border={1}>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
}
