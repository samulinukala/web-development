function clock()
{
const clockText=document.getElementById("clockText"); 
  
  let time=new Date();
  let display=time.toLocaleTimeString();
  clockText.innerText=display;
}
function loopClock()
{
setInterval(clock,200);  
}