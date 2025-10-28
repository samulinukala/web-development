function setUp()

{
let num1=0;
let num2=0;
let num3=0;
let whichnumber=false;
const result=document.getElementById("result");
let op="";
}

function addnumber(numd){
  if(whichnumber==false){
    num1=num1+numd;
    result.innerText=num1;
  }else{
    num2=num2+numd;
    result.innerText=num2;
  }
}
function equals() {
  switch (op){
    case "+":
    num3=num1+num2;
    result.innerText=num3;
    break;
    case "-":
      num3=num1-num2;
      result.innerText=num3;
      break;
    case "/":
      num3=num1/num2;
      result.innerText=num3;
  }
  
}
function operation(sign){
  switch (sign){
  case "/":
    whichnumber=true;
    op="/";
  break;
  case "-":
    whichnumber=true;
    op="-";
    break;
    case "x":
    whichnumber=true;
    op="x";
    break;
    case "+":
    whichnumber=true;
    op="+";
    break;
    default:
    console.log("failure");
    break;
  }
}