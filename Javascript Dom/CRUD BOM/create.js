function readUsersFromForm(){
    var user = {
        fname : document.getElementById("fname").value,
        email : document.getElementById("email").value,
        gender : document.getElementById("gender").value,
        state : document.getElementById("state").value,
        subjects : []
    };
    var allCheckBoxes = document.getElementsByName("subjects");
    for(let i = 0; i < allCheckBoxes.length; i++){
        if(allCheckBoxes[i].checked){
            user.subjects.push(allCheckBoxes[i].value)
        }
    }

    return user
}
function createUser(){
    var user =  readUsersFromForm()

    fetch("http://localhost:3000/users",{
        method : "POST",
        body : JSON.stringify(user),
        headers : {"content-type": "application/json"},
    }).then(()=>{
        getUsersFromApi()
    })
} 
