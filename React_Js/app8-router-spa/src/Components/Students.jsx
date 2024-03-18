import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

const Students = () => {
  const [studentdetails, setstudentdetails] = useState([]);

  //In Two Ways we can get data from server either axios or Fetch..
  useEffect(() => {
    axios.get("http://localhost:3200/users").then((response) => {
      console.log(response.data);
      setstudentdetails(response.data);
    });
    // fetch("http://localhost:3200/userDetails").then(response=> response.json()).then(data=> console.log(data))
  }, []);
  return (
    <div>
      <h1>Welcome to Students Page</h1>
      <ul>
        {studentdetails.map((val, i) => {
          console.log(val);
          return (
            <li key={i}>
              <Link to={`${val.id}`}> {val.username}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet/>
    </div>
  );
};

export default Students;
