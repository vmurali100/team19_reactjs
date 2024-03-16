import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import axios from "axios";

export const StudentsDetails = () =>{
    const [student , setStudent] = useState({});
    const location = useLocation();
    console.log(location);
    const userId = location.pathname.split("/")[2];


    useEffect(()=>{
      getStudentDetails();
    },[userId]);

   const getStudentDetails = () =>{
    axios.get("http://localhost:3200/users/" + userId).then((response)=>{
       console.log(response.data)
       setStudent(response.data)
    })
   }

   return(
    <div>
        <h2>Welcome to student Details</h2>
        <ul>
            <li>{student.fname}</li>
            <li>{student.state}</li>
            <li>{student.email}</li>

        </ul>
    </div>
   )
}