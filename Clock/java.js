function clock()
{
const clockText=document.getElementById("clockText"); 
  
  let time=new Date();
  let display=time.toLocaleDateString
  clockText.innerText=hour+":"+minute+ ":"+ second;
}
function loopClock()
{
setInterval(clock,200);  
}