import kaboom from "kaboom"

// initialize context
kaboom()

loadSprite("flappybg", "sprites/flappybg.png");
loadSprite("birdred", "sprites/birdred.png");
loadSprite("flappypipe", "sprites/flappypipe.png");
loadSound("score", "sounds/score.mp3");
loadSound("wooosh", "sounds/wooosh.mp3");
loadSound("off", "sounds/off.mp3");

const PIPE_GAP = 350;
const JUMP_FORCE = 600;
let highScore = 0;

scene("maingame", ()=>{
  let score = 0;
  
  add([
  sprite("flappybg", {width: width(), height: height()}),
  ])

  const player = add([
    sprite("birdred"),
    pos(300, 50),
    area(),
    body(),
    scale(0.1)
  ])

  function producePipes(){
    let offset = rand(-200,200);
    add([
    sprite("flappypipe"),
    pos(width(), height()/2 + offset + PIPE_GAP/2),
    scale(0.6),
    "pipe",
    area(),
    {passed:false}
  ])
  
    add([  
    sprite("flappypipe", {flipY: true}),
    pos(width(), height()/2 + offset - PIPE_GAP/2),
    scale(0.6),
    origin("botleft"),
    "pipe",
    area()
  ])
  }

  let scoretext = add([
    text(score),
    scale(0.6),
    pos(20,20),
  ])

  loop(1.5, ()=>{
    producePipes();
  })
  
  action("pipe", (pipe)=>{
    pipe.move(-800,0);

    if(pipe.passed === false && pipe.pos.x < player.pos.x){
      pipe.passed = true;
      score+=1;
      // debug.log(score);
      scoretext.text = score;
      play("score");
    }
  })
  
  player.collides("pipe", ()=>{
    go("gameover", score);
  })
  
  keyPress("space", ()=>{
    play("wooosh");
    player.jump(JUMP_FORCE);
  })
  
  player.action(()=>{
    if(player.pos.y>height()+50 || player.pos.y<0-50){
      go("gameover", score);
    }
  })
});
  
scene("gameover", (score)=>{
  play("off");

  if(score>highScore){
    highScore = score;
  }

  add([
    sprite("flappybg", {width: width(), height: height()})
  ])
  
  add([
    text("Game Over!\n" + "Score: " + score + "\nHighscore: " + highScore),
    pos(width()/2 - 100, height()/2 - 75),
    scale(0.5),
  ])

  keyPress("space", ()=>{
    go("maingame");
  })
});

go("maingame");
