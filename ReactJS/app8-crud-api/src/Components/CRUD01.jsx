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
   else if (e.target.name === "state"){
    console.log(e.target.childNodes);
    e.target.childNodes.forEach((opt)=>{
        if(opt.selected){
            newUser[e.target.name] = opt.value
        }
    });
   }
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

    // getDataFromServer();
}

useEffect(()=>{
    getDataFromServer();

},[])

const getDataFromServer = () =>{
    fetch("http://localhost:3200/crud",{
        method : "GET",

    }).then((res)=>{
      return res.json()

    }).then((data)=>{
        console.log(data)
        setUsers(data);

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
              <input type="checkbox" name="areasOfInterest" value={"HTML"} onChange={handleChange} />HTML
              <input type="checkbox" name="areasOfInterest" value={"CSS"} onChange={handleChange}/>CSS
              <input type="checkbox" name="areasOfInterest" value={"JAVASCRIPT"} onChange={handleChange}/>Javascript
              <input type="checkbox" name="areasOfInterest" value={"REACTJS"} onChange={handleChange}/> ReactJs <br />

              <label htmlFor="">State : </label>
              <select name="state" onChange={handleChange}>
                <option value=""></option>
                <option value="AP">AP</option>
                <option value="TS">TS</option>
                <option value="TN">TN</option>
                <option value="KA">KA</option>
              </select><br /><br />

              <button type="button" onClick={handleAddUser}>Add User</button>
           </form>
        </div>
        <div className="tableDisplay">
             <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Areas Of Interest</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((usr,i)=>{
                          return (

                            <tr>
                            <td>{usr.fname}</td>
                            <td>{usr.email}</td>
                            <td>{usr.gender}</td>
                            <td>{usr.areasOfInterest}</td>
                            <td>{usr.state}</td>
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