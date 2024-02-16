async function GetData() {
    var response = await fetch("http://localhost:3000/Users")
    data = await response.json()

    data.map(element => {
        var { name, email, age, occupation, recomendSiteToFriend, skill, suggestions } = element
        var newData = { name, email, age, occupation, recomendSiteToFriend, skill, suggestions };

        var mytr = document.createElement("tr")
        for (a in newData) {
            var myTd = document.createElement("td")
            mytr.appendChild(myTd)
            myTd.innerHTML = element[a]
        }
        var editTd = document.createElement("td")
        mytr.appendChild(editTd)
        var editBtn = document.createElement("button")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)
        document.querySelector("tbody").appendChild(mytr)
    });
}


GetData()


