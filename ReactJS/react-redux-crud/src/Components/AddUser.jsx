import React, {  useState } from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { actionAddUser } from '../Action';
import { useNavigate } from 'react-router-dom';


;

const AddUser = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        contact: '',
        address: ''
    })
    // const [isTrue, setTsTrue] = useState(false)
    const dispatch = useDispatch()
    const navigateTo=useNavigate()

    const handleEvent = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };   
   

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(actionAddUser(userDetails))
        setUserDetails({
            name: '',
            email: '',
            contact: '',
            address: ''
        });
        navigateTo("/usersList")
    };            
    return (
        <>
        <div>

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
            <br />
            <br />



        </div>
       
       </>
    )
}

export default AddUser