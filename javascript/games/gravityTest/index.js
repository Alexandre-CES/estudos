const player = document.getElementById('player');

const GRAVITY = 5;
const JUMP_POWER = 50;
const GROUND_LEVEL = 500;
const RIGHT_WALL = 1305;

let isJumping = false;
let velocityY = 0;
let positionY = GROUND_LEVEL;

let positionX = 600;
const keysPressed = {};

function updatePlayerPosition() {
    player.style.top = `${positionY}px`;
    player.style.left = `${positionX}px`;
}

function movePlayer() {
    if (keysPressed['ArrowLeft']) {
        positionX = Math.max(9, positionX - 5);
    }
    if (keysPressed['ArrowRight']) {
        positionX = Math.min(RIGHT_WALL, positionX + 5);
    }
    updatePlayerPosition();
    requestAnimationFrame(movePlayer);
}

function jump() {
    if (isJumping) return;
    
    isJumping = true;
    velocityY = -JUMP_POWER;

    const jumpLoop = () => {
        velocityY += GRAVITY;
        positionY += velocityY;
        
        if (positionY >= GROUND_LEVEL) {
            positionY = GROUND_LEVEL;
            velocityY = 0;
            isJumping = false;
            updatePlayerPosition();
            return;
        }

        updatePlayerPosition();
        requestAnimationFrame(jumpLoop);
    };

    jumpLoop();
}

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;

    if (event.key === 'ArrowUp') {
        jump();
    }

    event.preventDefault();
});

document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
});

movePlayer();
updatePlayerPosition();
