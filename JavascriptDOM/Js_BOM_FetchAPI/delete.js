function deleteUser(user){
    fetch("http://localhost:3000/users/"+users[user].id,{
        method:"DELETE"
    }).then((res)=>res.json()).then(()=>{
        console.log("User Deleted Successfully !!")
        window.location.href="sample_01.html";
    })
}