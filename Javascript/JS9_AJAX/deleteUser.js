function deleteUser(i){
    console.log(users[i])

    var deleteData = new XMLHttpRequest();
    deleteData.onreadystatechange = function (){
        if(deleteData.readyState === 4 && deleteData.status === 200){
            console.log("User added",JSON.parse(deleteData.response))
            users = JSON.parse(deleteData.response);
            displayUsers()
        }
    }
    deleteData.open("DELETE","http://localhost:3000/users/"+users[i].id);
    deleteData.send()
}