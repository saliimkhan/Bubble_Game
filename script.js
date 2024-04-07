
gsap.to("#loader",{
    top:"-100vh",
    delay:3,
    duration:2.7,

})





var timer = 64;
var score = 0;
var hitrn = 0;


function makeBubble(){
   var bubble =""

    for(i=0;i<=125;i++){
        var rn = Math.floor(Math.random() *10)
        bubble += `<div class="Bubble">${rn}</div>`
    }
    
    document.querySelector("#p-botm").innerHTML= bubble
}

function runTimer(){
var timerint = setInterval(function(){
   if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent = timer;
   }
   else{
    clearInterval(timerint);
    document.querySelector("#p-botm").innerHTML= `<h1>Game Over</h1>`
    
   }
},1000)
}

function getNewHit(){
 hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn; 
}

function increasedScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

// function rncolor(){
//     var a = Math.floor( Math.random() *255);
//     var b = Math.floor( Math.random() *255);
//     var c = Math.floor( Math.random() *255);
 
//     document.querySelector("#p-botm").style.backgroundColor = ` rgba(${a}, ${b}, ${c})`;
//  }


function startgame(){
    document.querySelector("#p-botm").addEventListener("click",function(dets){
        var clickenum = Number(dets.target.textContent);
        if(hitrn === clickenum){
         increasedScore();
         getNewHit();
         makeBubble();
        //  rncolor();
        //  coolor();
        }
        else{
            // increasedScore();
            getNewHit();
            makeBubble();
            // document.querySelector("#p-botm").innerHTML= `<h1>Game Over</h1>`
        }
        
     })
}




makeBubble();
runTimer();
getNewHit();
startgame();








