import React, { useState } from "react";

const Form_Func = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        gender: ""
    })
    const [errorMessages, setErrorMessages] = useState({
        name: "",
    });


    const submitHandler = (event) => {
        event.preventDefault();
        validation();
        
        const existingUserData = JSON.parse(localStorage.getItem("users")) || [];        
        const updatedUserData = [...existingUserData, user];        
        localStorage.setItem("users", JSON.stringify(updatedUserData));    
        setUser({
            name: "",
            email: "",
            number: "",
            gender: ""
        });
    }
    


    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const validation = () => {
        var alphabet = /^[a-zA-Z]+$/;

        setErrorMessages({
            name: "",
        });

        if (user.name.trim() === "") {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                name: "Fullname is required"
            }));
        } else if (!alphabet.test(user.name)) {
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                name: "Enter a valid name (only alphabets allowed)"
            }));
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                <p id="nameErrorMessage">{errorMessages.name}</p>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} />
                <br />
                <label htmlFor="number">Contact</label>
                <input type="number" id="number" name="number" value={user.number} onChange={handleInputChange} />
                <br />
                <label htmlFor="gender">Gender</label>
                {/* <input type="radio" name="gender" id="" value={male} />Male
                <input type="radio" name="gender" id="" value={female}/>Female
                <input type="radio" name="gender" id="" value={others}/>Others */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Form_Func;