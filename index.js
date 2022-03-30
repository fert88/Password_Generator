let char=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',"0","1","2","3","4","5","6","7","8","9","_","-","%","&","'"]
let pas1=document.getElementById("pass1")
let pas2=document.getElementById("pass2")
let pas3=document.getElementById("pass3")
let pas4=document.getElementById("pass4")
let pas=[pas1,pas2,pas3,pas4]
function generate(){
    let password=""
    let input=document.querySelector(`#length`).value
    console.log(input)
    let b=Number(input)
    console.log(b)
    for(let i=0;i<4;i++){
        for(let j=0;j<b;j++){
            password+=char[Math.floor(Math.random()*67)]
        }
        pas[i].textContent=password
        password=""
    }
}