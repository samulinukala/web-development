
function randomiseColor(){
  
  let red= Math.floor( Math.random()*255);
  let blue= Math.floor( Math.random()*255);
  let green= Math.floor( Math.random()*255);
  let color= "rgb(" +red+","+green+","+blue+")";
 document.getElementById("bg").style.backgroundColor= color;

  
 console.log("completed");
}
function loopColor()
{ for(let step=0;step<100;step++){
  setTimeout(function(){decoyFunc()},10000*step);
  randomiseColor();
}}
function decoyFunc(){
  console.log("wow");
}