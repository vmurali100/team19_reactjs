function addUser(){
    var user = {
        fname:document.getElementById("fname").value,
        email:document.getElementById("email").value,
        state:document.getElementById("state").value,
        dob:document.getElementById("dob").value,
        subjects:[]
    }

    var allradiobtns=document.getElementsByName("gender");
    for(i=0;i<allradiobtns.length;i++){
        if(allradiobtns[i].checked){
            user.gender=allradiobtns[i].value
        }
    }


var allcheckboxes=document.getElementsByName("subjects")
for(i=0;i<allcheckboxes.length;i++){
    if(allcheckboxes[i].checked){
        user['subjects'].push(allcheckboxes[i].value)

    }
}


console.log("adduser called !!",user)
adduserToAPI(user);
    }


function adduserToAPI(user){
var postdata=new XMLHttpRequest();
postdata.onreadystatechange=function(){
    if(postdata.readyState === 4 && postdata.status === 201){
        console.log("user added")
    }
}
postdata.open ("post","http://localhost:3000/users");
postdata.setRequestHeader("content-type","application/json");
postdata.send(JSON.stringify(user))

}