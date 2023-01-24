import kaboom from "kaboom"

// initialize context
kaboom()
loadSprite("enemyship", "sprites/enemyship.png");
loadSprite("playership", "sprites/playership.png");
loadPedit("wall", "sprites/wall.pedit");
loadSound("off", "sounds/off.mp3");
loadSound("score", "sounds/score.mp3");
loadSound("hit", "sounds/hit.mp3");

const MOVE_SPEED = 500;
const INVADER_SPEED = 300;
let CURRENT_SPEED = INVADER_SPEED;
let LEVEL_DOWN = 30;
const BULLET_SPEED = 500;
let SCOREVAL = 0;

scene("maingame", () => {
  add([
    sprite("wall", { width: width(), height: height() })
  ])

  const enemies = addLevel([
    '!^^^^^^^^^^        &',
    '!^^^^^^^^^^        &',
    '!^^^^^^^^^^        &',
    '!                  &',
    '!                  &',
    '!                  &',
    '!                  &',
    '!                  &',
    '!                  &',
    '!                  &',
  ], {
    width: 100,
    height: 100,
    '^': () => [sprite('enemyship'), scale(0.2), area(), "space_invader"],
    '!': () => [sprite('wall'), area(), "left_wall"],
    '&': () => [sprite("wall"), area(), "right_wall"],
  })

  const player = add([
    sprite("playership"),
    pos(width() / 2, height() - 100),
    scale(0.2),
    area(),
    origin("center"),
  ])

  keyDown("right", () => {
    player.move(MOVE_SPEED, 0);
  })

  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
  })

  action("space_invader", (s) => {
    s.move(CURRENT_SPEED, 0);
  })

  action("space_invader", (s) => {
    s.move(0, LEVEL_DOWN);
  })

  action('bullet', (b)=>{
    b.move(0, -BULLET_SPEED);
    if(b.pos.y<0){
      destroy(b);
    }
  })

  collides("space_invader", "right_wall", () => {
    CURRENT_SPEED = -INVADER_SPEED;
  })

  collides("space_invader", "left_wall", () => {
    CURRENT_SPEED = INVADER_SPEED;
  })

  collides("bullet", "space_invader", (b,s)=>{
    destroy(b);
    destroy(s);
    SCOREVAL++;
    play("hit");
  })

  onCollide('playership', "space_invader", () => {
    go('gameover');
  })

  action("space_invader", (s) => {
    if (s.pos.y >= height()) {
      go("gameover");
    }
  })

  action(()=>{
    if(SCOREVAL>=30){
      go("gamewin");
    }
  })

  function spawnBullet(p) {
    add([rect(6,18),
    pos(p),
    origin('center'), 
    color(142,220,230),
    area(),
    "bullet"]
    )
  }

keyPress("space", ()=>{
  spawnBullet(player.pos.add(0,-40))
  play("score");
})

})

scene("gameover", () => {
  // play("off");
  SCOREVAL = 0;

  add([
    sprite("wall", { width: width(), height: height() })
  ])

  add([
    text("Game Over!"),
    pos(width() / 2 - 100, height() / 2 - 75),
    scale(0.5),
  ])

  keyPress("space", () => {
    go("maingame");
  })
})

scene("gamewin", () => {
  // play("off");
  SCOREVAL = 0;

  add([
    sprite("wall", { width: width(), height: height() })
  ])

  add([
    text("You Win!"),
    pos(width() / 2 - 100, height() / 2 - 75),
    scale(0.5),
  ])

  keyPress("space", () => {
    go("maingame");
  })
})

go("maingame");
