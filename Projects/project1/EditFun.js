function editFunction(index) {
    i = index;


    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("submitBtn").style.display = "none"; 


    document.getElementById("name").value = data[i].name;
    document.getElementById("email").value = data[i].email;
    document.getElementById("age").value = data[i].age;
    document.getElementById("occupation").value = data[i].occupation;

    var ansCheckboxes = document.getElementsByName("ans");
    ansCheckboxes.forEach((checkbox) => {
        checkbox.checked = data[i].recomendations.includes(checkbox.value);
    });

    var skillsCheckboxes = document.getElementsByName("skills");
    skillsCheckboxes.forEach((checkbox) => {
        checkbox.checked = data[i].skills.includes(checkbox.value);
    });

    document.getElementById("suggestions").value = data[i].suggestions;
}

function updateUser() {

    var Users = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        occupation: document.getElementById("occupation").value,
        suggestions: document.getElementById("suggestions").value,
        recomendations: [],
        skills: []
    };

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


    fetch("http://localhost:3000/Users/" + data[i].id, {
        method: "PUT",
        body: JSON.stringify(Users),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}
