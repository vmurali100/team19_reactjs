import React, { useContext, useState } from 'react';
import { userContext } from './Context_Auth'; 


const Login = () => {
    const [userDetails, setUserDetails] = useState({
        userName: "",
        password: ""
    });

    const handleUser = (e) => {
        const newUserDetails = { ...userDetails };
        newUserDetails[e.target.name] = e.target.value;
        setUserDetails(newUserDetails);
    };

    const getContext = useContext(userContext);
    const { longinUser } = getContext; 

    const submitHandler = (e) => {
        e.preventDefault();
        longinUser(userDetails,setUserDetails);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">User Name</label>
                <input type="text" name="userName" value={userDetails.userName} onChange={handleUser} /> {/* Corrected the name */}
                <br />
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={userDetails.password} onChange={handleUser} />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
