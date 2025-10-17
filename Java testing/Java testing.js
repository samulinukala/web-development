function clock()
{
const clockText=document.getElementById("clockText"); 

//do {
  let time=new Date();
  const hour=time.getHours();
  const second=time.getSeconds();
  const minute=time.getMinutes();
  const millisecond=time.getMilliseconds();
  clockText.innerText=hour+" : "+minute+ " : "+ second+" : "+millisecond;
//}
//while (true);

}