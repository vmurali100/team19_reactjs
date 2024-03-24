import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAsync, getAllUsersAsyc } from "./usersSlice";

const MainUsers = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleGetUsers = () => {
    dispatch(getAllUsersAsyc());
  };
  const handleDelete = async (usr) => {
    const resp = await dispatch(deleteUserAsync(usr));
    dispatch(getAllUsersAsyc());
  };
  return (
    <div>
      <h2>Welcome to Main users !!!</h2>
      <button onClick={handleGetUsers}>Get Users</button>
      <hr />
      <table border={1} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, i) => (
            <tr key={i}>
              <td>{usr.id}</td>
              <td>{usr.email}</td>
              <td>{usr.username}</td>
              <td>{usr.password}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDelete(usr);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainUsers;
