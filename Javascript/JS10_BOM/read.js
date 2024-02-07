var users = [];
function getUsersFromAPI() {
  fetch("http://localhost:3000/users")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      users = data;
      console.log(data);
      displayUsers()
    });
}

function displayUsers() {
    for (let index = 0; index < users.length; index++) {
        var eachObj = users[index]
       var myTr = document.createElement("tr");
       for(a in eachObj){
        var myTd = document.createElement("td");
        myTd.innerHTML = eachObj[a]
        myTr.appendChild(myTd)
       }
       var editTd = document.createElement("td");
       var editBtn = document.createElement("button");
       editBtn.innerHTML = "Edit"
       editBtn.setAttribute("onclick","editUser("+index+")")
       editTd.appendChild(editBtn)
       myTr.appendChild(editTd);

       //deletebtn

       var Deleted = document.createElement("td");
       var deletebtn = document.createElement("button");
       deletebtn.innerHTML = "Edit"
       deletebtn.setAttribute("onclick","deleteUser("+index+")")
       Deleted.appendChild(deletebtn)
       myTr.appendChild(Deleted);

        document.querySelector("tbody").appendChild(myTr)
    }
}
getUsersFromAPI()

function editUser(i){
    console.log(i)
    localStorage.setItem("userToEdit",JSON.stringify(users[i]));
    window.location.href = "editUser.html"
}