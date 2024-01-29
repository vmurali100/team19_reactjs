var users = [];
function getUsersFromAPI() {
  var getData = new XMLHttpRequest();
  getData.onreadystatechange = function () {
    if (getData.readyState === 4 && getData.status === 200) {
      console.log("User added", JSON.parse(getData.response));
      users = JSON.parse(getData.response);
      displayUsers();
    }
  };
  getData.open("GET", "http://localhost:3000/users");
  getData.send();
}
getUsersFromAPI();

function displayUsers() {
  console.log(users);
  for (let i = 0; i < users.length; i++) {
    var myTr = document.createElement("tr");
    var eachObj = users[i];
    for (a in eachObj) {
      var myTd = document.createElement("td");
      myTd.innerHTML = eachObj[a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    editTd.appendChild(editBtn);
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);
    document.querySelector("tbody").appendChild(myTr);
  }
}
