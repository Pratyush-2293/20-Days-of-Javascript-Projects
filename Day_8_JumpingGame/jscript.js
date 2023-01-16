var chara = document.getElementById("player");
var enem = document.getElementById("enemy");
var scorevalue = document.getElementById("scoreval");
let x = 0;

function jump(){
    if(chara.classList != "jumpanim"){
        chara.classList.add("jumpanim");
        x++
        scorevalue.innerHTML = x;
    }
    setTimeout(() => {
        chara.classList.remove("jumpanim");
    }, 800);
}

var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
    var enemyLeft = 
    parseInt(window.getComputedStyle(enem).getPropertyValue("left"));

    if(enemyLeft<40 && enemyLeft>0 && characterTop>= 460){
        enem.style.animation = "none";
        x==0;
        alert("Game Over! Reload the page to restart game.");
    }
})