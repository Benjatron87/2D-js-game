var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var square = 20;
var x = 70;
var y = canvas.height - 300;
var dx = 0;
var dy = 0;
let randy = Math.floor(Math.random() * 300) + 100
let score = 0;
let sec = 0;
let render;
let gameOver = false;
let towerW = 80;

let towerX = 480;

function drawBall() {
    ctx.beginPath();
    ctx.rect(x, y, square, square);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

console.log(randy)

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 32:

        dy = -13;
        sec = 0;

        break;
    }
};

render = setInterval(draw, 25);

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(y < 600){
        y += dy + (.32 * (sec * sec))/2;
    }
    else if(y > canvas.height){
        lose()
        clearInterval(render)
        y = canvas.height - 300;
    }

    towerX -= 10;

    if (towerX === -50){
        randy = Math.floor(Math.random() * 300) + 100
        towerX = 480;
    }

    if(x === towerX + 50){
        score++
        console.log(score);
    }

   
    if(y >= 0 && y + square <= randy && x + square >= towerX && x <= towerX + towerW){
        lose();
    }
    if(y >= randy + 150 && y + square <= 600 && x + square >= towerX && x <= towerX + towerW){
        lose();
    }

    drawBall();
    upperTower();
    lowerTower();
    sec += .75
}

let lowerTower = function(){

    ctx.beginPath();
    ctx.rect(towerX, randy + 150, towerW, 600);
    ctx.fillStyle = "rgb(255, 0, 0, 1)";
    ctx.fill();
    ctx.closePath();
}

let upperTower = function(){

    ctx.beginPath();
    ctx.rect(towerX, 0, towerW, randy);
    ctx.fillStyle = "rgb(255, 0, 0, 1)";
    ctx.fill();
    ctx.closePath();
}

let lose = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('you lose')
    clearInterval(render)
    
}