import { useState } from "react";

export default function VmrUser() {
  const [welcomeMessage, setWelcomeMessage] = useState(""); // useState Hook ()
  const [user, setUser] = useState({});
  const [students, setStudents] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const showMessage = () => {
    setWelcomeMessage("Welcome to React JS .. Thanks for Clicking !!!");
  };

  const displayPersonDetails = () => {
    setUser({
      fname: "Rama",
      lname: "Krishna",
      email: "ram@gmail.com",
    });
  };

  const displayStudentsDetails = () => {
    setStudents(["Rama", "Soma", "Kiran", "Kumar"]);
  };

  const showImageDetails = () => {
    setImgUrl(
      "https://media.istockphoto.com/id/532338784/photo/summer-flowers-series-beautiful-water-lily-in-pond.jpg?s=2048x2048&w=is&k=20&c=MLcpHJmrIY1sQOnfP-dQPDlq_pjCwoPXFLlm8xISww8="
    );
  };
  return (
    <div>
      <button onClick={showMessage}>Display Message</button>
      <h2>{welcomeMessage}</h2>
      <hr />
      <p>Display Object With Map Method ::</p>
      <button onClick={displayPersonDetails}>Display Person</button>
      <ul>
        {Object.values(user).map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
      <hr />
      <p>Display Students with Map Statement :--</p>
      <button onClick={displayStudentsDetails}>Diplay Students</button>
      <ul>
        {students.map((student) => {
          return <li>{student}</li>;
        })}
      </ul>
      <hr />
      <button onClick={showImageDetails}>Show Image</button>
      <img
        src={imgUrl}
        alt=""
        srcset=""
        style={{ border: "2px solid red", padding: "5px" }}
      />
    </div>
  );
}
