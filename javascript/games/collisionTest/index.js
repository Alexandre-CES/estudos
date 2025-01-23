const baseCanvas = document.getElementById('base');
const ctx = baseCanvas.getContext('2d');

//size of both squares
const squaresSizes = {
    w:25,
    h:25
}

//position of static squre
const staticSquare = {
    x: baseCanvas.width / 2 - squaresSizes.w / 2,
    y: baseCanvas.height / 2 - squaresSizes.w / 2
}

//position of mouse
let mouse = {
    x:1,
    y:1
};

function Main(){

    //update mouse position when it moves
    document.addEventListener('mousemove', (event)=>{
        const rect = baseCanvas.getBoundingClientRect();
        const scaleX = baseCanvas.width / rect.width;
        const scaleY = baseCanvas.height / rect.height;

        mouse.x = (event.clientX - rect.left) * scaleX - squaresSizes.w / 2;
        mouse.y = (event.clientY - rect.top) * scaleY - squaresSizes.w / 2;
    })

    //initial load
    animate();
}

function animate(){
    
    requestAnimationFrame(animate);
    
    ctx.clearRect(0,0,baseCanvas.width,baseCanvas.height)

    ctx.fillStyle = "rgb(0 0 200)";
    ctx.fillRect(
        mouse.x,
        mouse.y,
        squaresSizes.w,
        squaresSizes.h
    );

    //red if is colliding, gray if not
    if(collision()){
        ctx.fillStyle = "rgb(255 0 0)";
        
    }else{
        ctx.fillStyle = "rgb(180 180 180)";
    }

    ctx.fillRect(
        staticSquare.x,
        staticSquare.y,
        squaresSizes.w, 
        squaresSizes.h
    );

}

//check if squares are colliding
function collision(){
    return (
        mouse.x < staticSquare.x + squaresSizes.w &&
        mouse.x + squaresSizes.w > staticSquare.x &&
        mouse.y < staticSquare.y + squaresSizes.h &&
        mouse.y + squaresSizes.h > staticSquare.y
    );
}

//starts when window load
window.addEventListener('load', Main);