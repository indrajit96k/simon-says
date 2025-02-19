//creating arrays for storing val
let gameSeq=[];
let userSeq=[];
let color=["one","two","three","four"];
let started=false;
let level=0;
let levelh=document.querySelector('h4');
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true; 
        levelup();  
    }
    
    
});
//getting random button flashes
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function levelup(){
    //resetting usersequence
    userSeq=[];
    
    level++;
    levelh.innerText="level  " + level;
    
    let randomidx= Math.floor(Math.random() * 3)+1;
    let randcolor=color[randomidx];
    let selrandbtn=document.querySelector(`.${randcolor}`);
    // console.log(randomidx);
    // console.log(randcolor);
    // console.log(selrandbtn);
    gameSeq.push(randcolor); 
    console.log(gameSeq);

    btnflash(selrandbtn);

}
//check ans
function checkAns(idx){
    if(userSeq[idx]!=gameSeq[idx]){
        levelh.innerHTML=`Game Over! Your Score Was <b>${level}</b><br>Press Any Key To Start.`;
        resize ();
        
    }else{
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }

}
//giving user to select the button
function btnpress(){
    let userbtn=this;
    btnflash(userbtn);
    let usercolor=userbtn.getAttribute('id');
    userSeq.push(usercolor);
    console.log(userSeq);
    // console.log("Button was Pressed");
    checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(b of allbtns){
    b.addEventListener("click",btnpress);

}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}