import { useEffect, useState } from "react";
import "../Styles/Styles.css"

export const CRUD01 = () =>{
    const [user, setUser] = useState({
        fname : "",
        email : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    });
const[users , setUsers] = useState([])
const[index, setIndex] = useState(null)
const handleChange = (e) =>{
   const newUser = {...user}
         //check the checkbox is checked or not
   if(e.target.name === "areasOfInterest"){

      //If the checkbox is checked then added to the array
        if(e.target.checked){
        //   console.log(e)
           newUser.areasOfInterest.push(e.target.value);
        } else {
        //If the checkbox is not checked then remove it from array
        // console.log(e);
        var index = newUser.areasOfInterest.indexOf(e.target.value);
              if( index !== -1){
                  newUser.areasOfInterest.splice(index , 1)
              }
        }
   }
//    else if (e.target.name === "state"){
//     console.log(e.target.childNodes);
//     e.target.childNodes.forEach((opt)=>{
//         if(opt.selected){
//             newUser[e.target.name] = opt.value
//         }
//     });
//    }
   else{
    newUser[e.target.name] = e.target.value
   }

   setUser(newUser)

}

const handleAddUser = () =>{
    fetch("http://localhost:3200/crud",{
        method : "POST",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(user)
    });

    getDataFromServer();
    clearForm()
}

useEffect(()=>{
    getDataFromServer();

},[])

const getDataFromServer = () =>{
    fetch("http://localhost:3200/crud",{
        method : "GET",
        headers : {"content-type" : "application/json"}

    }).then((res)=>{
      return res.json()

    }).then((data)=>{
        console.log(data)
        setUsers(data);

    })
}
const deleteUser = (payload) =>{
    console.log(payload);
    fetch("http://localhost:3200/crud/"+payload.id,{
        method:"DELETE",
        headers :{"content-type" : "application/json"}
    });
    getDataFromServer();
}

const editUser = (user) =>{
  setUser(user);
  setIndex(user.id)

}
const updateUser = () =>{
    console.log(user);
    fetch("http://localhost:3200/crud/" + user.id,{
        method : "PUT",
        headers : {"content-type" : "application/json"},
        body : JSON.stringify(user)
    })
    clearForm();
    getDataFromServer();
    setIndex(null)
}

const clearForm = () =>{
    setUser({
        fname : "",
        email : "",
        gender : "",
        areasOfInterest : [],
        state : ""
    })
}



return(
    <div className="mainContainer">
        <div className="formDisplay">
           <form action="">
              <label htmlFor="">FullName : </label>
              <input type="text" name="fname" value={user.fname} onChange={handleChange}/><br />

              <label htmlFor="">Email :</label>
              <input type="text" name="email" value={user.email} onChange={handleChange}/><br />

              <label htmlFor="">Gender</label>
              <input type="radio" name="gender" checked ={user.gender === "Male"}value={"Male"} onChange={handleChange}/> Male
              <input type="radio" name="gender" checked = {user.gender === "Female"}value={"Female"} onChange={handleChange} /> Female
              <input type="radio" name="gender" checked = {user.gender === "Other"} value={"Other"} onChange={handleChange}/> Others <br />

              <label htmlFor="">Areas Of Interest</label>
              <input type="checkbox" checked = {user.areasOfInterest.includes("HTML")}name="areasOfInterest" value={"HTML"} onChange={handleChange} />HTML
              <input type="checkbox" checked = {user.areasOfInterest.includes("CSS")} name="areasOfInterest" value={"CSS"} onChange={handleChange}/>CSS
              <input type="checkbox" checked = {user.areasOfInterest.includes("JAVASCRIPT")} name="areasOfInterest" value={"JAVASCRIPT"} onChange={handleChange}/>Javascript
              <input type="checkbox" checked = {user.areasOfInterest.includes("REACTJS")}name="areasOfInterest" value={"REACTJS"} onChange={handleChange}/> ReactJs <br />

              <label htmlFor="">State : </label>
              <select name="state" value= {user.state}onChange={handleChange}>
                <option value=""></option>
                <option value="AP">AP</option>
                <option value="TS">TS</option>
                <option value="TN">TN</option>
                <option value="KA">KA</option>
              </select><br /><br />

             {index == null ?  <button type="button" onClick={handleAddUser}>Add User</button> :
              <button type="button" onClick={updateUser}>Update User </button>}
           </form>
        </div>
        <div className="tableDisplay">
             <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Areas Of Interest</th>
                        <th>State</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usr,i)=>{
                          return (

                            <tr key={i}>
                            <td>{usr.id}</td>
                            <td>{usr.fname}</td>
                            <td>{usr.email}</td>
                            <td>{usr.gender}</td>
                            <td>{usr.areasOfInterest}</td>
                            <td>{usr.state}</td>

                            <td>
                                <button type="button" onClick={()=>{editUser(usr)}}>Edit</button>
                            </td>
                            <td>
                              <button type="button" onClick={()=>{deleteUser(usr)}}>Delete</button>
                            </td>


                          </tr>
                          )
                        })
                    }
                </tbody>
             </table>
        </div>
    </div>
)
}