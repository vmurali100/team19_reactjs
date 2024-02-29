import { useState } from "react"

// Declaring a variable , Objects , Arrays  in Reactjs..

export default function User(){
    //Declaring a variable 
    const [Welcomemsg,setWelcomemsg]=useState("Hello World");

    // Declaring a Object

    const [user,setuser]= useState({
        fname:"sandy",
        lname:"Hulk",
        email:"sandyHulk@gail.com",
    });

    // declaring a Array

    const [students,setstudents]= useState(["sandy","ram","amar","subash","sam"]);

    
    return <div>
        <h1>{Welcomemsg}</h1>
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
        <img src="https://images.pexels.com/photos/899238/pexels-photo-899238.jpeg" alt="" /> <br /><br /> <br />
        <h1>Tables</h1>

        <table style={{  backgroundColor:"pink", width:"100%"}} border={2}>
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