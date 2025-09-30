window.onload=function(){randomiseColor};
function randomiseColor(){
  while(true){
  let red= Math.floor( Math.random()*255);
  let blue= Math.floor( Math.random()*255);
  let green= Math.floor( Math.random()*255);
  let color= "rgb(" +red+","+green+","+blue+")";
 document.getElementById("bg").style.backgroundColor= color;
  }
 console.log("completed");
}