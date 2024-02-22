import { useState } from "react";


export default function StudentLoop(){
    const [message, setMessage] = useState("Hello world");
    const [user, setUser] = useState({
        fname: "nani",
        lname : "kumar",
        email : "nani@gmail.com"
    });
    const[arr, setArr] = useState([
        "Raja",
        "ravi",
        "hema",
        "yochu"
    ]);

    return(
        <div>
            <h2>{message}</h2>
            <hr />
            <p>Display Object With Map Method</p>
            <ul>
                {Object.values(user).map((obj) =>{
                    return <li>{obj}</li>
                })}
            </ul>
            <hr />
            <p>Display array with Map method</p>
            <ul>
                {arr.map((val) =>{
                    return <li>{val}</li>
                })}
            </ul>
            <img
      src="https://media.istockphoto.com/id/1828592428/photo/new-year-and-christmas-concept-on-snowy-landscape.jpg?s=1024x1024&w=is&k=20&c=voYtyJAaiQYzzb3uFyU_pePVs2uNyPnPOXQ4WsLCR9g="
        alt=""
        style={{border : "5px solid black", padding : "5px"}}
      />
        </div>
    )
}