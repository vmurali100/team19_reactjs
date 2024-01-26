var gIndex = null;
function editUser(i) {
  console.log(users[i]);
  gIndex=i
  document.getElementById("fname").value = users[i].fname;
  document.getElementById("email").value = users[i].email;
  document.getElementById("dob").value = users[i].dob;
  document.getElementById("state").value = users[i].state;

  var allRadioBtns = document.getElementsByName("gender");
  for (let index = 0; index < allRadioBtns.length; index++) {
    if (allRadioBtns[index].value === users[i].gender) {
      allRadioBtns[index].checked = true;
    }
  }

  var allCheckBoxes = document.getElementsByName("subjects");
  for (let index = 0; index < allCheckBoxes.length; index++) {
    //    console.log(allCheckBoxes[index])
    //     console.log( users[i].subjects)

    var check = users[i].subjects.some((val) => allCheckBoxes[index].value === val);
    allCheckBoxes[index].checked = check
   
  }
}

function updateUser(){
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
    updateUserToAPI(user)
}

function updateUserToAPI(user){
    var postData = new XMLHttpRequest();
    postData.onreadystatechange = function (){
        if(postData.readyState === 4 && postData.status === 201){
            console.log("User added")
        }
    }
    postData.open("PUT","http://localhost:3000/users/"+users[gIndex].id);
    postData.setRequestHeader("Content-Type","application/json");
    postData.send(JSON.stringify(user))
}