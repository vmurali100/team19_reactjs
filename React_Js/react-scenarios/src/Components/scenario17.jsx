import React, { useState } from "react";

export function UserReviews(){
  const [review,setreview]=useState([
    {name:"sandy",reviews:"Great Product ...!!"},
    {name:"Amar",reviews:"Nice Product ...!!"},
    {name:"Virat",reviews: "not bad...!!"},
  ])

  return <div>
    <h1 style={{color:"red"}}>Scenario_17</h1>
    <h2>UserReviews</h2>
   <ul style={{listStyleType:"none"}}>{review.map((rev,i)=>{
    return <li style={{fontSize:"20px",fontWeight:"500"}} key={i}>{rev.name}:{rev.reviews}</li>
   })}</ul>
   <hr />
  </div>
}