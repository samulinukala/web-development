window.onload=function(){randomiseColor};
function randomiseColor(){
  
  let red= Math.floor( Math.random()*255);
  let blue= Math.floor( Math.random()*255);
  let green= Math.floor( Math.random()*255);
  let color= "rgb(" +red+","+green+","+blue+")";
 document.getElementById("bg").style.backgroundColor= color;

  
 console.log("completed");
}
function loopColor()
{while(true){
  setTimeout(randomiseColor(),300);
}}