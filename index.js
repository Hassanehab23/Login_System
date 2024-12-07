let signUpName=document.getElementById("signUpName");
let signUpPassword=document.getElementById("signUpPassword");
let signUpEmail=document.getElementById("signUpEmail");
let signUp=document.getElementById("signUp")
let upInfo=document.getElementById("upInfo")


signUp.addEventListener("click",function(){
    addUsers();
})
let allUsers=[]

function clearForm(){
    signUpName.value="";
    signUpEmail.value="";
    signUpPassword.value="";
}

if(localStorage.getItem("users") !=null){
    allUsers = JSON.parse(localStorage.getItem("users"))
}


function addUsers(){
    if(validateName() &&validateEmail() &&validatePassword()){
        var user={
            Name:signUpName.value,
            Email:signUpEmail.value,
            Password:signUpPassword.value
        }
        allUsers.push(user);
        localStorage.setItem("users", JSON.stringify(allUsers))
        console.log(allUsers);
        upInfo.innerHTML=`<p>Success</p>`
        upInfo.style.color="#28A745"
        clearForm()
    }
    else if(signUpName.value=="" ||signUpEmail.value=="" || signUpPassword.value==""){
        upInfo.innerHTML=`<p>all inputs are required</p>`
        upInfo.style.color=" #DC3545"
    }
    else{
        upInfo.innerHTML=`<p>you must Enter a valid data</p>`
        upInfo.style.color=" #DC3545"
    }
    
}



function validateName() {
    const regex = /^[A-Z][a-z]{1,12}$/;
    return regex.test(signUpName.value)
}


function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(signUpEmail.value)
}

function validatePassword() {
    const regex = /^[0-9]+$/;
    return regex.test(signUpPassword.value)
}
