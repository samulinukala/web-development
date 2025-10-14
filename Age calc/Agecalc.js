function calculateAge(){
const curDate=new Date();
const d= curDate.getFullYear();
const bday=document.getElementById("bday").value;
document.getElementById("p1").innerHTML=bday;
console.log(bday);
}