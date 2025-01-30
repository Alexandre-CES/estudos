const baseCanvas = document.getElementById('baseCanvas');
const ctx = baseCanvas.getContext('2d');

const GRAVITY = 2;

let player = {
    name: 'player',

    w:25,
    h:25,

    x:300,
    y: baseCanvas.height - 25,

    jumpPower:20,
    isJumping: false,

    speedX:0,
    maxSpeedX:5,
    speedY:0,

}

let direction = {
   x: false,
   y: 'down'
}

let objectsInGame = [
    player,
    {
        name: 'ground',
        x:0,
        y:baseCanvas.height,

        w:baseCanvas.width,
        h:baseCanvas.height
    },
    {
        name: 'wall1',
        x: 0,
        y: 0,

        w: 10,
        h: baseCanvas.height
    },
    {
        name: 'wall2',
        x: baseCanvas.width -10,
        y: 0,

        w: 10,
        h: baseCanvas.height
    },
    {
        name: 'square1',

        x: 350,
        y: baseCanvas.height - 30,

        w: 30,
        h: 30
    },
    {
        name: 'square2',

        x: 400,
        y: baseCanvas.height - 100,

        w: 30,
        h: 30
    }
    
]

function start(){

    document.addEventListener('keydown', (event)=>{

        const key = event.key;
        if(key == 'w'){
            direction.y = 'up';

        }else if(key == 's'){
            direction.y = 'down';

        }else if(key == 'a'){
            direction.x = 'left';

        }else if(key == 'd'){
            direction.x = 'right';

        }else{

        }
    });

    document.addEventListener('keyup', (event)=>{
        const key = event.key;
        if(key == 'w' || key == 's'){
            direction.y = false;

        }else if(key == 'a'){
            if (direction.x == 'left'){
                direction.x = false;
            }
        }else if(key == 'd'){
            if (direction.x == 'right'){
                direction.x = false;
            }
        }else{

        }
    })

}

function Main(){
    requestAnimationFrame(Main);
    applyGravity();
    movePlayer();
    renderObjectsInGame();

    if (direction.y == 'up'){
        jump();
    }

}

function applyGravity() {
    if (!collisionY()) {
        player.speedY += GRAVITY;
    } else {
        if (player.speedY == 0){
            player.isJumping = false;
        }
    }

    player.y += player.speedY;

    if (collisionY()) {
        player.speedY = 0; 
    }
}

function renderObjectsInGame() {
    ctx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
    for(let obj of objectsInGame){
        if(obj.name == 'player'){
            ctx.fillStyle = 'blue';
        }else{
            ctx.fillStyle = 'black';
        }   
        ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
    }
    
}

function jump() {
    if (!player.isJumping) {
        player.isJumping = true;
        player.speedY = -player.jumpPower;
    }
}

function movePlayer() {
    if (direction.x === 'left' && player.speedX > -player.maxSpeedX) {
        player.speedX -= 1;
    } else if (direction.x === 'right' && player.speedX < player.maxSpeedX) {
        player.speedX += 1;
    } else {
        player.speedX *= 0.9;
    }

    player.x += player.speedX;

    if (collisionX()) player.speedX = 0;
}

function collisionX(){
    for (let obj of objectsInGame) {
        if (obj === player) continue;

        if (
            player.x + player.w > obj.x &&
            player.x < obj.x + obj.w &&
            player.y + player.h > obj.y &&
            player.y < obj.y + obj.h
        ) {
            if (direction.x === 'right') {
                player.x = obj.x - player.w;
            } else if (direction.x === 'left') {
                player.x = obj.x + obj.w;
            }
            return true;
        }
    }
    return false;
}

function collisionY(){
    for (let obj of objectsInGame) {
        if (obj === player) continue;

        if (
            player.y + player.h >= obj.y &&
            player.y < obj.y + obj.h &&
            player.x + player.w > obj.x &&
            player.x < obj.x + obj.w
        ) {

            if(player.y < obj.y){
                player.y = obj.y - player.h;
                
            }else{
                player.y = obj.y + obj.h;
                player.speedY = 0
            }

            
            return true;
        }
    }
    return false;
}

window.addEventListener('load', ()=>{
    start();
    Main();
});