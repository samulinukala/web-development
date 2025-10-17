function clock()
{
const clockText=document.getElementById("clockText"); 
let t=true;

  t=false;
  let time=new Date();
  const hour=time.getHours();
  const second=time.getSeconds();
  const minute=time.getMinutes();
  const millisecond=time.getMilliseconds();
  clockText.innerText=hour+" : "+minute+ " : "+ second+" : "+millisecond;
 


}