
const mainButton = document.querySelector('#main-button');
const showClicks = document.querySelector('#showCliques');
const cooldownUpgrade = document.querySelector('#cooldownUpgrade');

var clickAudio = new Audio('static/audios/mixkit-arcade-game-jump-coin-216.wav');

var clicks = 0;
var iscooldown = false;
var ClickCooldown = 1000;

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

mainButton.addEventListener('click', ()=>{ 
    if (iscooldown == false){
        iscooldown = true;
        clicks += 1;
        updateClicks();
        clickResize();
        clickAudio.currentTime = 0;
        clickAudio.play();
        fcooldown();
    }
});

cooldownUpgrade.addEventListener('click',()=>{
    if(ClickCooldown <= 100){
        cooldownUpgrade.style.visibility = 'hidden'
        return
    }
    if(clicks >= 1){
        clicks -= 1;
        ClickCooldown -= 100;
        updateClicks();
    }
});

async function fcooldown(){
    await wait(ClickCooldown);
    iscooldown = false;
}

async function clickResize(){
    mainButton.style.width =  '100px';
    mainButton.style.height = '100px';

    await wait(100);
    
    mainButton.style.width = '80px';
    mainButton.style.height = '80px';
}

function updateClicks(){
    showClicks.innerHTML = clicks;
}
    

