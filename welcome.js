let sayWelcome=document.getElementById("sayWelcome")

sayWelcome.innerHTML=`

<h1>Welcome ${localStorage.getItem("allNames")}</h1>

`
let Logout=document.getElementById("Logout")
Logout.addEventListener("click",function(){
    this.setAttribute("href","index.html")
})