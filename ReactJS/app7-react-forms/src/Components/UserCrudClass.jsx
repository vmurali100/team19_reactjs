import { Component } from "react";
import { UserFormClass } from "./UserFormClass";
import { UsersTableClass } from "./UserTableClass";

export class UserCrudClass extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
      },
      usersArr: [
        { fname: "John", lname: "Doe", email: "john.doe@example.com" },
        { fname: "Jane", lname: "Doe", email: "jane.doe@example.com" },
        { fname: "Alice", lname: "Smith", email: "alice.smith@example.com" },
        { fname: "Bob", lname: "Johnson", email: "bob.johnson@example.com" },
        { fname: "Emily", lname: "Brown", email: "emily.brown@example.com" },
      ],
      index: null,
    };
  }
  handleChange = (e) =>{
     const newUser = {...this.state.user};
     newUser[e.target.name] = e.target.value;
     this.setState({user : newUser})
  }
  handleAddUser = () =>{
      const newUsers = [...this.state.usersArr];
      newUsers.push(this.state.user);
      this.setState({usersArr : newUsers});
      this.clearForm();
  }
  handleEdit = (usr , i) =>{
      this.setState({
        index : i ,
        user : usr
      })
  }
  handleUpdate = () =>{
      const newUsers = [...this.state.usersArr];
      newUsers[this.state.index] = this.state.user;
      this.setState({
        usersArr : newUsers ,
        index : null
      });
      this.clearForm()

  }
  handleDelete = (usr , i) =>{
    this.setState({usersArr : this.state.usersArr.filter((us,index) =>  index !== i

      )})
  }
  clearForm = () =>{
    this.setState({
      user : {
        fname : "",
        lname : "",
        email :""
      }
    })
  }
  render() {
    const {user,usersArr,index} = this.state;
    const{handleChange,handleAddUser,handleDelete,handleEdit,handleUpdate} = this
    return (
      <div>
        <UserFormClass
         user ={user}
         handleChange={handleChange}
         index = {index}
         handleAddUser={handleAddUser}
         handleUpdateUser={handleUpdate}
        />
        <UsersTableClass
        usersArr ={usersArr}
        handleEdit = {handleEdit}
        handleDelete = {handleDelete}/>

      </div>
    );
  }
}
