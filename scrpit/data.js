let dat
let cont2=document.getElementById("cont2")
async function getdata(){
    try{
        let req=await fetch("http://localhost:8080/data")
        let data= await req.json()
        dat=data.users
        console.log(dat)
        displaydata(dat)

    }catch(err){
        console.log(err)
    }
}

function displaydata(data){
    let alldata=data.map((item)=>{
        return `
        <div>
        <img src=${item.profile_piture}/>
        <h1>${item.name}</h1>
        <h4>${item.age}</h4>
        <h4>${item.place}</h4>
        <h4>${item.batch}</h4>
        <h4>${item.profession}</h4>
        <button>Edit</button>
        <button>Delete</button>

        `
    })
    console.log(data)
    cont2=innerHTML=alldata.join(" ")
}
getdata()

let lth=document.getElementById("lth")
lth.addEventListener("click",sortlth)

function sortlth(){
    dat.sort((a,b)=>{ return a.age-b.age})
    console.log(dat)
    displaydata(dat)
}
let htl=document.getElementById("htl")
lth.addEventListener("click",sorthtl)

function sorthtl(){
    dat.sort((a,b)=>{ return b.age-a.age})
    console.log(dat)
    displaydata(dat)
}


