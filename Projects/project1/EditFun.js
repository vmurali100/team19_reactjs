function editFunction(index) {
<<<<<<< HEAD
    i = index;


    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("submitBtn").style.display = "none"; 

=======
  i = index;
  document.getElementById("name").value = data[i].name;
  document.getElementById("email").value = data[i].email;
  document.getElementById("age").value = data[i].age;
  document.getElementById("occupation").value = data[i].occupation;

  var ansCheckboxes = document.getElementsByName("ans");
  ansCheckboxes.forEach((checkbox) => {
    checkbox.checked = data[i].recomendations.includes(checkbox.value);
  });
>>>>>>> c003166ecf2c2a50d8c44d0c6f84edc7c3a25d6d

  var skillsCheckboxes = document.getElementsByName("skills");
  skillsCheckboxes.forEach((checkbox) => {
    checkbox.checked = data[i].skills.includes(checkbox.value);
  });

  document.getElementById("suggestions").value = data[i].suggestions;
}

function updateUser() {
<<<<<<< HEAD

    var Users = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        occupation: document.getElementById("occupation").value,
        suggestions: document.getElementById("suggestions").value,
        recomendations: [],
        skills: []
    };
=======
  var Users = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("age").value,
    occupation: document.getElementById("occupation").value,
    suggestions: document.getElementById("suggestions").value,
    recomendations: [],
    skills: [],
    id: data[i].id,
  };
>>>>>>> c003166ecf2c2a50d8c44d0c6f84edc7c3a25d6d

  var ansCheckboxes = document.getElementsByName("ans");
  ansCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      Users.recomendations.push(checkbox.value);
    }
  });

  var skillsCheckboxes = document.getElementsByName("skills");
  skillsCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      Users.skills.push(checkbox.value);
    }
  });

<<<<<<< HEAD

    fetch("http://localhost:3000/Users/" + data[i].id, {
        method: "PUT",
        body: JSON.stringify(Users),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
=======
  fetch("http://localhost:3000/Users/" + data[i].id, {
    method: "PUT",
    body: JSON.stringify(Users),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      navigateTo("userList");
    } else {
      console.error("Error updating user data");
    }
  });
>>>>>>> c003166ecf2c2a50d8c44d0c6f84edc7c3a25d6d
}
