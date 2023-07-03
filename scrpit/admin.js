let data=document.getElementById("data")

data.addEventListener("click",data)
let token=localStorage.getItem("log_token")

function data(){
   if(token){
window.location="./data.html"
   }else{
    alert("please login first")
   }
}




let report=document.getElementById("report")

report.addEventListener("click",report)

function report(){
    if(token){
        window.location="./data.html"
           }else{
            alert("please login first")
           }
}
let login=document.getElementById("login")

login.addEventListener("click",()=>{
    
    window.location="./login.html"
})