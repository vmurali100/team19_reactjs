function deleteUser(user){
    fetch("http://localhost:3000/users/"+user.id,{
        method:"Delete"
    }).then((res)=>res.json()).then(()=>{
        console.log("User Deleted Successfully !!")
        window.location.href="sample_01.html";
    })
}
