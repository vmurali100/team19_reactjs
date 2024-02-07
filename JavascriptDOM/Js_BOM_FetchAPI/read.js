var users = [];
function getUserFromAPI() {
  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        console.log(data);
      const sortedArray = sortArrayOfObjects(data);
      users = sortedArray;
      displayusers();
    });
}
function sortArrayOfObjects(array) {
  return array.map((obj) => sortObjectProperties(obj));
}
function sortObjectProperties(obj) {
  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sortedObj[key] = obj[key];
    });
  return sortedObj;
}

function displayusers() {
  document.querySelector("tbody").innerHTML = "";
  for (let index = 0; index < users.length; index++) {
    var mytr = document.createElement("tr");
    var eachobject = users[index];
    for (e in eachobject) {
      var mytd = document.createElement("td");
      mytd.innerHTML = eachobject[e];
      mytr.appendChild(mytd);
    }

    // edittd

    var edittd = document.createElement("td");
    var editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    edittd.appendChild(editbtn);
    editbtn.setAttribute("onclick", "edituser(" + index + ")");
    mytr.appendChild(edittd);
    document.querySelector("tbody").appendChild(mytr);

    // deletetd

    var deletetd = document.createElement("td");
    var deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.setAttribute("onclick", "deleteUser(" + index + ")");
    deletetd.appendChild(deletebtn);
    mytr.appendChild(deletetd);
  }
}
getUserFromAPI();

function edituser(i) {
  console.log(i);
  localStorage.setItem("userToEdit", JSON.stringify(users[i]));
  window.location.href = "edituser.html";
}
