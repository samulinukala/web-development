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
  switch (sign){
    case "+":
      
  }
}
function operation(sign){
  switch (sign){
    
  }
  {
    whichnumber=true;
    op="/";
  }
  else if(sign=="-"){
    whichnumber=true;
    op="-";
  }else if(sign=="x"){
    whichnumber=true;
    op="x";
  }else {
    whichnumber=true;
    op="+";
  }
}