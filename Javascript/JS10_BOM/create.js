
function readUsersFromForm(){
    var user = {
        fname: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        state: document.getElementById("state").value,
        subjects: [],
      };
      var allSubjects = document.getElementsByName("subjects");
      for (let index = 0; index < allSubjects.length; index++) {
        if (allSubjects[index].checked) {
          user.subjects.push(allSubjects[index].value);
        }
      }

      return user
}
function createUser() {
    var user = readUsersFromForm()
  // Posting Data to Server
  //   1. Using XMLHttpRequest
  // If a function returning a Promise , WE should use .then for Success , .cath for error
  fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  }).then(()=>{
    getUsersFromAPI()
  })

}
