let gameseq=[];
let userseq=[];
let hs=document.querySelector("#highscore");

let started=false;
let h2=document.querySelector("h2");
let btns=["yellow","red","blue","purple"];
let score =0;
let level=0;
let highscore=0;

document.addEventListener("keypress",()=>{
    if(started==false){
      levelup();
      started=true;
    }   
}
)

function flash(btn){
    btn.classList.add("white");
    setTimeout(()=>{
     btn.classList.remove("white");
    },150) 
}

function levelup(){
    userseq=[];
    
    level++;
    h2.innerText=`Level ${level} `;

    let a=Math.floor(Math.random()*3);//randoindex
    let b=btns[a];//randomcolorchoose
    let btn2=document.querySelector(`.${b}`);//randomcolor wale button ko choose krengy
    gameseq.push(b);
    flash(btn2);
    
}
function checkans(id){
    if(userseq[id]==gameseq[id]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
            score=score+10;
        }
    }
    else{
        h2.innerText="Gameover! Press any key to play again your score is " + score +".";
        if(score>highscore){
            highscore=score;
            hs.innerText=`Highscore: ${highscore} `;
        }
        reset();
    }

}

function btnpress(){
     let btn=this;
     flash(btn);

     let usercolor=btn.getAttribute("id");
     userseq.push(usercolor);
     checkans(userseq.length-1);

}

let allbtn=document.querySelectorAll(".btn");
  for (btn of allbtn){
        btn.addEventListener("click",btnpress);
        }

function reset(){  
      started=false;
      userseq=[];
      gameseq=[];
      level=0;
      score=0;
}