let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let login = document.getElementById("login")
let welcomeAnchor = document.getElementById("welcomeAnchor")
let index;
var allUsers = [];
let allNames=[];
let welcomeName;
if (localStorage.getItem("users") != null) {
    allINFO = JSON.parse(localStorage.getItem("users"))
    console.log(allINFO);
}

for (let i = 0; i < allINFO.length; i++) {
    allNames.push(allINFO[i].Name)
}
//console.log(allNames);

login.addEventListener("click", function () {
    check(index);
    signIn()
})
let globalIndex;
function check(index) {
    for (let index = 0; index < allINFO.length; index++) {
        if (signinEmail.value === allINFO[index].Email &&signinPassword.value === allINFO[index].Password) {
            console.log(allNames[index]);
            welcomeName=allNames[index]
            localStorage.setItem("allNames", welcomeName)
            globalIndex=index;

            return true;
        }
        
    }
    
}


function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return true
    } else {
        return false
    }
}
function signIn() {
    if (isLoginEmpty() == true) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    else if(check(index)){
        // welcomeAnchor.classList.replace("d-none","d-block")
        // login.classList.replace("d-block","d-none")


        
        login.setAttribute("href","welcome.html")
        
        
    }
    else if(!check(index)){
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">please input valid gmail or password</span>'
    }
}
