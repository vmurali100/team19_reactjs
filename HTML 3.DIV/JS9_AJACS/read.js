var users=[];
function getuserfromAPI(){
    var getdata=new XMLHttpRequest();
    getdata.onreadystatechange=function(){
        if(getdata.readystate === 4 && getdata.status === 200){
            console.log('user added' , JSON.parse(getdata.response));
            users=JSON.parse(getdata.response);
            displayusers();
        }
    };
    getdata.open("GET","http://localhost:3000/users");
    getdata.send();
}

getuserfromAPI();

function displayusers(){
    console.log(users);
    for(i=0;i<users.length;i++){
        var mytr = document.createElement("tr");
        var eachobj=users[i];
        for(a in eachobj){
            var mytd=document.createElement("td");
            mytd.innerHTML=eachobj[a];
            mytr.appendChild(mytd);

        }

        var edittd = document.createElement('td');
        var editbtn = document.createElement("button");
        editbtn.innerHTML="EDIT";
        editbtn.setAttribute("onclick","edituser("+i+")")
        edittd.appendChild(editbtn);
        mytr.appendChild(edittd)


        var deletetd=document.createElement("td");
        var deletebtn=document.createElement("button");
        deletebtn.innerHTML="delete";
        deletebtn.setAttribute("onclick","deleteuser("+i+")")
        deletetd.appendChild(deletebtn);
        mytr.appendChild(deletetd)

        document.querySelector("tbody").appendChild(mytr)

    }
}

