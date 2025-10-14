function calculateAge(){
const curDate=new Date();
const d= curDate.getFullYear();
const bday=document.getElementById("bday").value;

let age=d.-bday;
document.getElementById("p1").textContent=("you are "+age+" old");
console.log(bday);
}