import { useState } from "react";

export default function UserButton(){
    const[message, setMessage] = useState("");
    const [user, setUser] = useState({});
    const[students, setStudents] = useState([]);
    const[imgUrl, setImgUrl] = useState("");

    const showMessage = () =>{
         setMessage("Hello ReactJs ...Thanks For clicking")
    }

    const showUser = ()=>{
        setUser({
            fname : "nani",
            lname : "kumar",
            age : 22
        })
    }
    const showStudents = ()=>{
        setStudents([
            "meena",
            "teena",
            "akhila",
            "ammu"
        ])
    }

    const showImg = ()=>{
        setImgUrl("https://media.istockphoto.com/id/1828592428/photo/new-year-and-christmas-concept-on-snowy-landscape.jpg?s=1024x1024&w=is&k=20&c=voYtyJAaiQYzzb3uFyU_pePVs2uNyPnPOXQ4WsLCR9g="
        );
    }


    return(
        <div>
            <button onClick={showMessage}>Display Message</button>
            <h2>{message}</h2>
             <hr />
            <button onClick={showUser}>Display Object</button>
            <ul>
                {Object.values(user).map((obj)=>{
                   return <li>{obj}</li>
                })}
            </ul>
            <hr />
            <button onClick={showStudents}>Display Array</button>
            <ul>
                {students.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
            <hr />
            <button onClick={showImg}>Display Image</button>
            <img src={imgUrl} alt="" style={{border : "2px solid black", padding: "5px"}}/>

        </div>
    )
}