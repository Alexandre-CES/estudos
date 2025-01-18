const player = document.getElementById('player');

const GRAVITY = 5;
const JUMP_POWER = 50;
const GROUND_LEVEL = 500;

let isJumping = false;
let velocityY = 0;
let positionY = GROUND_LEVEL;

function updatePlayerPosition() {
    player.style.top = `${positionY}px`;
}

/*  
    await/sleep function

    use example:
        -await sleep(1);
*/
function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function jump(){
    if (isJumping) return;

    isJumping = true;
    velocityY = -JUMP_POWER;

    const gameLoop = () => {
        
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
        requestAnimationFrame(gameLoop);
    };

    gameLoop();
}

//listening inputs
document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "ArrowDown":
        break;
      case "ArrowUp":

        jump();

        break;
      case "ArrowLeft":
        break;
      case "ArrowRight":
        break;
      default:
        return;
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
});

updatePlayerPosition();