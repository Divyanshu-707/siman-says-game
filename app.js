let gameseq=[];
let userseq=[];

let btns=["red","yellow","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    }

    levelUp();
    
})

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },1000);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;


    let h3=document.querySelector("h3");
    if(level>1 && level<5){
    h3.innerText="well played! continue...";
   } else if(level>=10){
    h3.innerText="you reached a High score";
   }else if(level>15){
    h3.innerText="Record break!!";
   }

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
    // console.log(randIdx);
    // console.log(randBtn);
}

function checkAns(idx){
if(userseq[idx]=== gameseq[idx]){
    if(userseq.length=== gameseq.length){
        setTimeout(levelUp,100);
    }
} else{
    h2.innerText=`you lost! your score is ${level}! Press any key to start again"`;
    reset();
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="rgb(160, 152, 95)";
    },400);
}
}


function btnPressed(){
    console.log("button pressed");
    let btn =this;
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    // console.log(userColor);
    console.log(userseq);
    userFlash(btn);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed);
}

function reset(){
    started=false;
    gameseq=[];
    level=0;
    userseq=[];
}

let h3=document.querySelector("h3");
let score=$(level);
if(score>1 && score<5){
    h3.innerText="well played! continue...";
}


