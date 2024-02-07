function addUser(){
    var user = {
        fname:document.getElementById("fname").value,
        email:document.getElementById("email").value,
        state:document.getElementById("state").value,
        dob:document.getElementById("dob").value,
        subjects:[]
    }

    var allRadioBtns = document.getElementsByName("gender");
    for(i=0;i<allRadioBtns.length;i++){
        if(allRadioBtns[i].checked){
            user.gender = allRadioBtns[i].value
        }
    }

    var allCheckBoxes = document.getElementsByName("subjects")
    for (let i = 0; i < allCheckBoxes.length; i++) {
        if(allCheckBoxes[i].checked){
            user['subjects'].push(allCheckBoxes[i].value)
        }
        
    }
    console.log("addUser Called !!",user)
    addUserToAPI(user);
}

function addUserToAPI(user){
    var postData = new XMLHttpRequest();
    postData.onreadystatechange = function (){
        if(postData.readyState === 4 && postData.status === 201){
            console.log("User added")
        }
    }
    postData.open("POST","http://localhost:3000/users");
    postData.setRequestHeader("Content-Type","application/json");
    postData.send(JSON.stringify(user))
}