import React, { useContext,useEffect } from 'react'
import { userContext } from './Context_Auth';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({chidlren}) => {
    const getContext = useContext(userContext);
    const navigateTo=useNavigate()
    const {isLoggedIn}=getContext

    useEffect(()=>{
        if (isLoggedIn===false) {
            navigateTo("login");
          }
      },[])

  return (
    <div>
      
      {chidlren}
      </div>
  )
}

export default ProtectedRoute