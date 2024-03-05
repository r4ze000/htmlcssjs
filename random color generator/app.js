let head=document.querySelector("h1");
let button=document.querySelector(".btn");
let box=document.querySelector(".box");

button.addEventListener("click",()=>{
    addbackgroundcolor();
});

function addbackgroundcolor(){
    let r=Math.floor(Math.random()*255)+1;
    let g=Math.floor(Math.random()*255)+1;
    let b=Math.floor(Math.random()*255)+1;
    box.style.backgroundColor="rgb(" + r + "," + g + "," + b + ")";
    head.innerText=`rgb(${r},${g},${b})`;
    head.style.color="rgb(" + r + "," + g + "," + b + ")";
}
