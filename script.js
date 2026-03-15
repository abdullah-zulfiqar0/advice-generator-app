

const URL =  "https://api.adviceslip.com/advice";

 async function advice(){
  try{

 const response =  await fetch(URL);
 const content = await  response.json();

 document.querySelector(".para p").innerHTML=`"${ content.slip.advice}"`;
document.querySelector(".main h1").innerHTML=`ADVICE #"${content.slip.id}"`;
 }

 catch(error){


  console.log("Error fetching advise",error)
 }
 }

 document.querySelector(".button").addEventListener("click",advice);