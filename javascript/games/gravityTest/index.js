const baseCanvas = document.getElementById('baseCanvas');
const ctx = baseCanvas.getContext('2d');

const GRAVITY = 5;

let player = {
    w:25,
    h:25,

    x:300,
    y: baseCanvas.height,

    jumpPower:50,
    isJumping: false,

    speedX:0,
    maxSpeedX:20,
    speedY:0,

}

let direction = {
   x: false,
   y: 'down'
}

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
    renderPlayer();

    if (direction.y == 'up'){
        jump();
    }

}

function applyGravity() {
    if (player.y < baseCanvas.height - player.h) {
        player.speedY += GRAVITY;
    } else {
        if (player.speedY == 0){
            player.isJumping = false;
            player.y = baseCanvas.height - player.h; 
        }
    }

    player.y += player.speedY;

    if (player.y >= baseCanvas.height - player.h) {
        player.y = baseCanvas.height - player.h;
        player.speedY = 0; 
    }
}

function renderPlayer() {
    ctx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.w, player.h);
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

    if (player.x < 0) player.x = 0;
    if (player.x > baseCanvas.width - player.w) player.x = baseCanvas.width - player.w;
}


window.addEventListener('load', ()=>{
    start();
    Main();
});