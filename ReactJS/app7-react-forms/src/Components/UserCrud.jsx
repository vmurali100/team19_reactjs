import { useState } from "react";

export const UserCrud = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [usersArr, setUsersArr] = useState([
    { fname: "John", lname: "Doe", email: "john.doe@example.com" },
    { fname: "Jane", lname: "Doe", email: "jane.doe@example.com" },
    { fname: "Alice", lname: "Smith", email: "alice.smith@example.com" },
  ]);
  const [index, setIndex] = useState(null);

  const handleChange = (e) =>{
      console.log(e)
      const newUser = {...user};
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
  }

  const handleAddUser = () => {
    const newUsersArr = [...usersArr];
    newUsersArr.push(user);
    console.log(newUsersArr);
    setUsersArr(newUsersArr);
    clearForm();
  };
  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
      email: "",
    });
  };
  const handleEdit = (usr, i) => {
    setUser(usr);
    setIndex(i);
  };
  const handleUpdateUser = () => {
    const newUsers = [...usersArr];
    newUsers[index] = user;
    setUsersArr(newUsers);
    setIndex(null);
    clearForm();
  };

  const handleDelete = (usr, i) => {
    // Using Splice Method
    // const newUsers = [...usersArr];
    // newUsers.splice(i, 1);
    // setUsersArr(newUsers);

    setUsersArr(
      usersArr.filter((us, index) => {
        return i !== index;
      })
    );
  };
  return (
    <div>
      <h2>CRUD using Functional Comp</h2>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          value={user.fname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          name="lname"
          value={user.lname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <br />
        {index == null ? (
          <button type="button" onClick={handleAddUser}>
            Add User
          </button>
        ) : (
          <button type="button" onClick={handleUpdateUser}>
            Update User
          </button>
        )}
      </form>
      <hr />
      <table border={1}>
        <thead>
         <tr>
         <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
         </tr>
        </thead>
        <tbody>
          {usersArr.map((usr, i) => {
            return (
              <tr key={i}>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(usr, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(usr, i);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
