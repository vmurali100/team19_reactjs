import { useState } from "react"

export const UserReviews = () =>{
const[userReviews, setUserReviews] = useState([])

const handleArrOfObjects = () =>{
    setUserReviews([
        {name : "Mobile", review : "This product is amazing and worthy! "},
        {name : "Laptop", review : "Great quality and value for money"},
        {name : "MacBook", review : "I'm very impressed with this product"}
    ])
}
    return(
        <div>
          <h2 style={{color:"green"}}>Scenario 17</h2>
          <ul>
            {userReviews.map((val )=>{
            return <li>
               <p>{val.name} : {val.review}</p>
             </li>
            })}

          </ul>
          <button onClick={handleArrOfObjects}>Display User Reviews</button>
          <hr />
        </div>
    )
}