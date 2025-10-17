function clock()
{
const clockText=document.getElementById("clockText"); 
  
  let time=new Date();
  const hour=time.getHours();
  const second=time.getSeconds();
  const minute=time.getMinutes();
  clockText.innerText=hour+":"+minute+ ":"+ second;
}
function loopClock()
{
setInterval(clock,20);  
}