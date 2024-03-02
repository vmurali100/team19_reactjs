import { useState } from "react"

export const UserReviews = () =>{
const[userReviews, setUserReviews] = useState([])

const handleArrOfObjects = () =>{
    setUserReviews([
        {name : "Mobile", review : "This product is amazing and worthy! "},
        {name : "fridge", review : "Great quality and value for money"},
        {name : "watch", review : "I'm very satisfied with this product"}
    ])
}
    return(
        <div>
          <h2 style={{color:"green"}}>Scenario 17</h2>
          <button onClick={handleArrOfObjects}>Display User Reviews</button>
          <ul>
            {userReviews.map((val )=>{
            return <li>
               <p>{val.name} : {val.review}</p>
             </li>
            })}

          </ul>
          
          <hr />
        </div>
    )
        }