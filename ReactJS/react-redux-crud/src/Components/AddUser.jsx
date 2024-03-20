import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddUser } from '../Action';

const AddUser = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        contact: '',
        address: ''
    })
    const handleEvent = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const dispatch = useDispatch()

    const ustate = useSelector((state) =>{
        return  state
    });
    


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(actionAddUser(userDetails))
        setUserDetails({
            name: '',
            email: '',
            contact: '',
            address: ''
        });
    };

    
    return (
        <div>
        {    console.log("initialState",ustate)
}
            <Input
                label="Name"
                name="name"
                placeholder="UserName"
                value={userDetails.name}
                onChange={handleEvent}
            />
            <br />
            <br />
            <Input
                label="Email"
                placeholder="email"
                name="email"
                value={userDetails.email}
                onChange={handleEvent}
            />
            <br />
            <br />
            <Input
                label="Contact"
                placeholder="contact"
                name="contact"
                value={userDetails.contact}
                onChange={handleEvent}
            />
            <br />
            <br />
            <Input
                label="Address"
                placeholder="address"
                name="address"
                value={userDetails.address}
                onChange={handleEvent}
            />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={submitHandler}>
                Submit
            </Button>
        </div>
    )
}

export default AddUser