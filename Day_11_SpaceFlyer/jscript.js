let scoreval = 0;
let score = document.getElementById("scoretext")

function goLeft(){
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    left -= 200;
    if(left>=0){
        player.style.left = left + "px";
        scoreval++;
        score.innerHTML = scoreval;
    }
}

function goRight(){
    let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    left += 200;
    if(left<=400){
        player.style.left = left + "px";
        scoreval++;
        score.innerHTML = scoreval;
    }
}

let rock = document.getElementById("rock");
rock.addEventListener('animationiteration', ()=>{
    let randomgen = Math.floor(Math.random() * 3);
    left = randomgen*200;
    rock.style.left = left + "px";
} )

setInterval(() => {
    let playerleft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    let rocktop = parseInt(window.getComputedStyle(rock).getPropertyValue("top"));

    if(playerleft==rockleft && rocktop>400 && rocktop<800){
        alert("Game Over! Score: " + scoreval);
        rock.style.animation = "none";
    }
}, 10);