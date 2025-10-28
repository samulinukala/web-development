



function addNumber(numd){
  const result=document.getElementById("result");
  if(whichnumber==false){
    num1=num1+numd;
    result.value=num1;
  }else{
    num2=num2+numd;
    result.value=num2;
  }
}
function equals() {
  const result=document.getElementById("result");
  switch (op){
    case "+":
    num3=num1+num2;
    result.value=num3;
    break;
    case "-":
      num3=num1-num2;
      result.value=num3;
      break;
    case "/":
      num3=num1/num2;
      result.value=num3;
      break;
    case "x":
      num3=num1*num2;
      result.value=num3;
      break;
  }
  whichnumber=false;
  num1=0;
  num2=0;
  num3=0;
}
let whichnumber=false;
let num1=0;
let num2=0;
let num3=0;

let op="";
function operation(sign){
const result=document.getElementById("result");
  switch (sign){
  case "/":
    whichnumber=true;
    result.value=
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
    console.log("plus");
    break;
    default:
    console.log("failure");
    break;
  }
}