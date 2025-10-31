let whichnumber=false;
let num1=0;
let num2=0;
let num3=0;
let op="";
let num1s="";
let num2s="";

function addNumber(numd){
  const result=document.getElementById("result");
  if(whichnumber==false){
    num1s=num1s+numd;
    result.value=num1s;
  }else{
    num2s=num2s+numd;
    result.value=num2s;
  }
}

function equals() {
  const result=document.getElementById("result");
  num1=Number(num1s);
  num2=Number(num2s);
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

function operation(sign){
const result=document.getElementById("result");
  switch (sign){
  case "/":
    whichnumber=true;
    result.value=num2;
    op="/";
  break;
  case "-":
    whichnumber=true;
     result.value=num2;
    op="-";
    break;
    case "x":
    whichnumber=true;
     result.value=num2;
    op="x";
    break;
    case "%":
      whichnumber=true;
      result.value=num2;

    case "+":
    whichnumber=true;
     result.value=num2;
    op="+";
    console.log("plus");
    break;
    default:
    console.log("failure");
    break;
  }
}