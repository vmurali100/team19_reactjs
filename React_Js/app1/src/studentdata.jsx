import React, { useState } from "react";
export function StudentData(){
    
    const [greetStu,setgreetStu]=useState ("");  // usestate   Hook()
    const [Studentdetails,setStudentdetails]=useState({});
    const [stunames,setstunames]=useState([]);
    const [stuimg,setstuimage]=useState("");

    const displayMessgae= () =>{
        setgreetStu("Welcome To StudentData Componenet...!")
    };

    const displayingStudentdetails=()=>{
        setStudentdetails({
            fname:"sandy",
            lname:"Hulk",
            email:"sandyHulk@gail.com"
        })
    }

    const displayingStuNames=()=>{
        setstunames(["sandy","ram","amar","subash","sam"])
    }
    const displayingImages=()=>{
        setstuimage("https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    };



    return <div>
        {/* Varibale Declaration*/}

        <h1>Displaying Variables , Arrays,Objects When User clicks Button </h1> <hr />
        <h3>Click this button  to show Some Mesaage..!</h3>
        <button onClick={displayMessgae}>clickme</button>
        <h2>{greetStu}</h2> <hr />


        {/* Object Declaration*/}

        <h3>Click this button  to show Student Details..!</h3>
        <button onClick={displayingStudentdetails}>clickme</button>
        <ul>
            {Object.values(Studentdetails).map((stu)=>{
                return <li>{stu}</li>
            })}
        </ul> <hr />


        {/* Array Declaration*/}

        <h3>Click this button  to show displayingStuNames..!</h3>
        <button onClick={displayingStuNames}>clickme</button>
        <ul>
            {stunames.map((stuname)=>{
                return <li>{stuname}</li>
            })}
        </ul> <hr />

        <h3>Click this button  to show Image..!</h3>
        <button onClick={displayingImages}>showimage</button> <br /> <br />
        <img 
        src={stuimg} 
        alt=""
        style={{border:"2px solid red", padding:"10px"}}
         />
    </div>
}