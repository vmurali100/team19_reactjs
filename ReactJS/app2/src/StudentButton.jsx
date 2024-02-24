import { useState } from "react"

export default function StudentLoop(){
    const[message, setMessage] = useState("");
    const[myObj, setMyObj] = useState({});
    const[myArr, setMyArr] = useState([]);

    const handleDisplayMessage = () =>{
        setMessage("Hello World")
    }
   const  handleDisplayObject = () =>{
        setMyObj({
            fname : "yochu",
            email : "yochu@gmail.com",
            age : 21
        })
    }

    const handleDisplayArray = () =>{
        setMyArr([
            "ram",
            "ravi",
            "seetha",
            "geetha"
        ])
    }

    return(
        <div>
            <button onClick={handleDisplayMessage}>Display Message</button>
            <h2>{message}</h2>
            <br />
            <button onClick={handleDisplayObject}>Display Object</button>
            <ul>
                {Object.values(myObj).map((obj)=>{
                  return <li>{obj}</li>
                })}
            </ul>
            <br />
            <button onClick={handleDisplayArray}>Display Array</button>
            <ul>
                {myArr.map((val)=>{
                  return <li>{val}</li>
                })}
            </ul>
        </div>
    )
}
