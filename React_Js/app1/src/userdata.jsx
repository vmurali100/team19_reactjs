import React, { useState } from "react";

export default function Userdata(){
    const [greeting,setgreeting]= useState("Hi Welcome To  my WebPage");

    const [userdetails,setuserdetails] = useState({
        fname:"sandy",
        lname:"Hulk",
        email:"sandyHulk@gail.com"
    });

    const [userinfo,setuserinfo]=useState(["sandy","amar","sudhir","sam"]);

    return <div>

        <h2>{greeting}</h2> <br />
        <hr />

        <h2>Displaying Objects</h2> 
        <ul>

            {Object.values(userdetails).map((usr)=>{
                return <li>{usr}</li>
            })}
        </ul>

        <hr />

        <h2>Displaying Arrays</h2>
        <ul>
            {userinfo.map((user)=>{
                return <li>{user}</li>

            })}
        </ul>
        <hr />

        <h2>Displaying Images</h2>
        <img src="https://images.pexels.com/photos/434551/pexels-photo-434551.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
        style={{border:"2px solid black", padding:"10px"}} /> <br /> <br />

        <hr />
        <h2>Displaying Tables</h2>
        <table style={{  backgroundColor:"lightgreen", width:"100%"}} border={2}>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>Sandy</td>
                    <td>Hulk</td>
                    <td>sandyvirat@gmail.com</td>
                </tr>
                <tr>
                    <td>Amar</td>
                    <td>Virat</td>
                    <td>Amarvirat@gmail.com</td>
                </tr>
                <tr>
                    <td>Subash</td>
                    <td>Virat</td>
                    <td>subashvirat@gmail.com</td>
                </tr>
                <tr>
                    <td>jack</td>
                    <td>Virat</td>
                    <td>jackvirat@gmail.com</td>
                </tr>
            </thead>
        </table>
    </div>
}