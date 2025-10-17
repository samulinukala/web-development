function clock()
{
const clockText=document.getElementById("clockText"); 
  
  let time=new Date();
  let display=time.tolo;
  clockText.innerText=display;
}
function loopClock()
{
setInterval(clock,200);  
}