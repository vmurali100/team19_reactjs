import React, {  useEffect, useState } from 'react';

const Home = () => {
  const [homeinfo,setHomeinfo]=useState([]);
  useEffect(()=>{
   fetch("http://localhost:3200/users").then((res)=>{res.json().then((data)=>{setHomeinfo(data)
   console.log(data)
  })})
},[]);


  return (
    <div>
      <h1>Welcome to Home</h1>
      <ul>
        {homeinfo.map((val,i)=>{
          return <li key={i}>{val.username}</li>
        })}
      </ul>
    </div>
  )
}

export default Home
