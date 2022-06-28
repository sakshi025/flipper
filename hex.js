const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
 document.addEventListener("click",function(){
    let randomnumber='#';
    for(let i=0;i<6;i++){
        randomnumber+=colors[getRandomnumber()]
    }
    document.body.style.backgroundColor=randomnumber;
    color.textContent=randomnumber;
 });
 function getRandomnumber(){
    return Math.floor(Math.random()*colors.length);
 }