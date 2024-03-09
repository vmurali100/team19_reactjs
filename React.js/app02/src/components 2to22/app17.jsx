import React, { useState } from "react";

export function Review(){
    const[user,setuser]=useState([

        {name:"Kiran",review:'"Osm Food"'},
        {name:"Jagadeesh",review:'"Poor taste"'},
        {name:"Prasad",review: '"Bad hotel"'},
      ])
      return <div>
      <h1 style={{color:"red"}}>Scenario_17</h1>
      <h2>UserReviews</h2>
     <ul style={{listStyleType:"none"}}>{user.map((val,i)=>{
      return <li style={{}} key={i}>{val.name}:{val.review}</li>
     })}</ul>
     <hr />
    </div>

}