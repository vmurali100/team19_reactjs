import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Input from '@mui/material/Input';
import { useDispatch } from 'react-redux';
import { actionEditUser } from '../Action'; // Assuming you have an action for editing user

const Edit_Modal = (props) => {
    const { userIndex,  cancelEdit } = props; // Assuming you pass the user details as a prop
    const [visible, setVisible] = useState(true);
    const [userDetails, setUserDetails] = useState({
        name: userIndex.name,
        email: userIndex.email,
        contact: userIndex.contact,
        address: userIndex.address
    });
    const dispatch = useDispatch();

    const handleEvent = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevUserDetails => ({
            ...prevUserDetails,
            [name]: value
        }));
    };

    const updateHandler = () => {
        // Dispatch an action to update user details
        dispatch(actionEditUser( userDetails));
        // Close the modal
        cancelEdit();
    };

    return (
        <Modal
            title="Edit User"
            visible={visible}
            onCancel={cancelEdit}
            footer={[
                <Button key="cancel" onClick={cancelEdit}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={updateHandler}>
                    Update
                </Button>,
            ]}
        >
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
        </Modal>
    );
};

export default Edit_Modal;
