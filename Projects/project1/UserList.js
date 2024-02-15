async function GetData() {
    var response = await fetch("http://localhost:3000/Users")
    data = await response.json()
  

    data.forEach(element => {      
        var mytr = document.createElement("tr")
        for (a in element) {          
            var myTd = document.createElement("td")
            mytr.appendChild(myTd)
            myTd.innerHTML = element[a]
        }
        var editTd=document.createElement("td")         
        mytr.appendChild(editTd)
        var editBtn= document.createElement("button")
        editBtn.innerHTML="Edit"
        editTd.appendChild(editBtn)
        document.querySelector("tbody").appendChild(mytr)
    });
}
GetData()