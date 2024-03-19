import React, { useState } from "react";


const User2 = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");

    const handlechange = (e) => {
        console.log(e.target.name)
        if (e.target.name === "fname") {
            setfname(e.target.value)
        } else {
            setlname(e.target.value)
        }
    }


    return <div>
        <h2>Welcome to Reactform2..!</h2>
        <form>
            <label htmlFor="">First Name: </label>
            <input type="text" name="fname" value={fname} onChange={handlechange} /> <br /> <br />
            <label htmlFor="">Last Name:</label>
            <input type="text" name="lname" value={lname} onChange={handlechange} /> <br /> <br />
            <button>Click Me!</button>
        </form>
    </div>
};

export default User2;


