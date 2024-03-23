import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionDeleteUser } from '../Action';
import Delete_Modal from '../Modals/Delete_Modal';
import Edit_Modal from '../Modals/Edit_Modal';

export const UsersList = () => {
    const { users } = useSelector((state) => {
        return state
    });
    const [editingIndex, setEditingIndex] = React.useState(null);
    const [isDelete, setIsDelete] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
    const [deleteIndex, setDeleteIndex] = React.useState(null);
    const [editIndex, setEditIndex] = React.useState(null);



    const DeleteUser = (index) => {
        setIsDelete(true)
        setDeleteIndex(index)
    }
    const confirmDelete = () => {
        dispatch(actionDeleteUser(deleteIndex));
        setIsDelete(false)
    }
    const cancelDelete = () => {
        setIsDelete(false)
    }

    const EditUser = (data) => {
        setIsEdit(true)
        setEditIndex(data)

    }
    const cancelEdit=()=>{
        setIsEdit(false)


    }

    const dispatch = useDispatch()
    return (
        <div>
            {isDelete ? <Delete_Modal
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
            /> : null}

            {isEdit ? <Edit_Modal
                userIndex={editIndex}
                cancelEdit={cancelEdit}
            /> : null}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((data, index) => {
                        const { name, email, contact, address } = data;
                        return (
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{contact}</td>
                                <td>{address}</td>
                                <td><button onClick={() => { DeleteUser(index) }}>Delete</button></td>
                                <td> <button onClick={() => { EditUser(data) }}>Edit</button></td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>



        </div>
    );
};
