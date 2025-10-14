function calculateAge(){
const curDate=new Date();
const d= curDate.getFullYear();
const bday=document.getElementById("bday").value;
const yearOfBirth=Date(bday);
let age=d-yearOfBirth.getFullYear;
document.getElementById("p1").textContent=("you are "+age+" old");
console.log(bday);
}