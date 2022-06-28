const colors=["red","blue","pink","orange"]
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function() {
    const randomnumber= getRandomnumber();

    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent=colors[randomnumber];
});
function getRandomnumber(){
    return Math.floor(Math.random()*colors.length);
}
