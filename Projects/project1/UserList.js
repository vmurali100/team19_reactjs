async function GetData() {
    var response = await fetch("http://localhost:3000/Users")
    data = await response.json()

    data.map((element, i) => {
        var { name, email, age, occupation, recomendations, skills, suggestions } = element
        var newData = { name, email, age, occupation, recomendations, skills, suggestions };

        var mytr = document.createElement("tr")
        for (a in newData) {
            var myTd = document.createElement("td")
            mytr.appendChild(myTd)
            myTd.innerHTML = newData[a]
        }
        var editTd = document.createElement("td")
        mytr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editBtn.addEventListener("click", (() => {
            navigateTo('register');
            editFunction(i);           
        }));        
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)

        var deleteTd = document.createElement("td")
        mytr.appendChild(deleteTd)
        var deleteBtn = document.createElement("button")
        deleteBtn.addEventListener("click", (() => {
            deleteFunction(i);           
        }));        
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)

        document.querySelector("tbody").appendChild(mytr)
    });
}


GetData()

