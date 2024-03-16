import React, { useContext, useEffect, useState } from 'react'
import UserContext from './UserContext'


const ReadUser = () => {
  const [userData, setUserData] = useState([])
  var user = useContext(UserContext)

  useEffect (()=>{
console.log(user)
  },[user])
  return (
    <div>{console.log(userData)      
    } Hello</div>
  )
}

export default ReadUser