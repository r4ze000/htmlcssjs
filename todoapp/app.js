let inp=document.querySelector("input");
let btn1=document.querySelector(".task");
let ul=document.querySelector("ul");

btn1.addEventListener("click",()=>{
    let t=document.createElement("li");
    t.innerText=inp.value;

    let del =document.createElement("button");
    del.innerText="delete";
    del.classList.add("delete");

    t.appendChild(del);
    ul.appendChild(t);  
    inp.value="";
})

ul.addEventListener("click",(event)=>{
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
})


// let del1=document.querySelectorAll(".delete");

// for(d of del1){
//     d.addEventListener("click",()=>{
//     d.parentElement.remove();
//     d.re move();
// });
