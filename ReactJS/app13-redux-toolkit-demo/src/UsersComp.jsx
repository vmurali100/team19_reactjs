import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./usersSlice";

const UsersComp = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(addUser( {
        "id": 21,
        "email": "murali@tortor.gov",
        "username": "murali",
        "password": "123"
    }));
  };

  const handleDelete = (user) => {
    dispatch(deleteUser(user))
  };
  return (
    <div>
      <h2>Welcome to Users Component !!!</h2>
      <button onClick={handleAddUser}>Add User</button>
      <hr />
      <ul>
        {users.map((usr, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                handleDelete(usr);
              }}
            >
              {usr.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersComp;
