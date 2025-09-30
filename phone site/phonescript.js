Object.onload=function(){randomiseColor};
function randomiseColor(){
  var red= Math.floor( Math.random()*255);
  var blue= Math.floor( Math.random()*255);
  var green= Math.floor( Math.random()*255);
  var color= "rgb(" +red+","+green+","+blue+")";
 document.getElementById("bg").style.color= color;
}