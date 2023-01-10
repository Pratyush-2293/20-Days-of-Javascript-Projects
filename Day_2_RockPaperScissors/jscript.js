let rps = ["Rock", "Paper", "Scissors"];
let x = 0;
let y = 0;
var computerText = document.getElementById("comp");
var playerText = document.getElementById("pla");
var resultText = document.getElementById("res");
function play(){
    x = Math.floor(Math.random() * 2);
    y = Math.floor(Math.random() * 2);
    computerText.innerHTML = rps[x];
    playerText.innerHTML = rps[y];
    result();
}

function result(){
    if(x==y){
        resultText.innerHTML = "Draw";
        resultText.style.background = "lightyellow"
    } else if(x==0 && y==1){
        resultText.innerHTML = "You Win";
        resultText.style.background = "lightgreen"
    } else if(x==0 && y==2){
        resultText.innerHTML = "You Lose";
        resultText.style.background = "lightcoral"
    } else if(x==1 && y==0){
        resultText.innerHTML = "You Lose";
        resultText.style.background = "lightcoral"
    } else if(x==1 && y==2){
        resultText.innerHTML = "You Win";
        resultText.style.background = "lightgreen"
    } else if(x==2 && y==0){
        resultText.innerHTML = "You Win";
        resultText.style.background = "lightgreen"
    } else if(x==2 && y==1){
        resultText.innerHTML = "You Lose";
        resultText.style.background = "lightcoral"
    }
}
