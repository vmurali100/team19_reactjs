import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const StudentDetails = () => {
  const [student,setStudent]=useState({})
  const location=useLocation();
  console.log(location)
  const userId=location.pathname.split("/")[2];
  useEffect(()=>{
    getStudentDetails();
  },[userId])
  const getStudentDetails=()=>{
    axios.get("http://localhost:3200/users/"+userId).then((response)=>{
      console.log(response.data)
      setStudent(response.data)
      
    })
    

  }
  return (
    <div>
    <h1>Welcome to Student details ...</h1>
    <ul>
      <li>{student.email}</li>
      <li>{student.username}</li>
      <li>{student.password}</li>
    </ul>
      
    </div>
  )
}

export default StudentDetails
