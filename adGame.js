let playButton;
let playerName;
let canvas;
let greeting;
let startGame = false;
let endGame = false; 
let furby;
let nameText;
let scoreText;

let furbyX = [];
let furbyY = [];

let score1 = 0
//ADS
let fb;
let instagram;
let spotify;
let ads = [];

let nasa;
let molang;
let peachMilk;
let peachy;
let pixelPlant;
let shapes;

let iconSelectText;

let timer;

//array that stores positions of images
let adX = [];
let adY = [];

//image array
let allAds = [];

//change font
//link play button to game
//get ads to go over the game

function preload(){
    
    //load you images in the images array. You can change the
//amount of images to match yours by changing 2 to whatever.
//your images should be named adsOne0.png, adsOne1.png, etc
    for (let i = 0; i<9; i++){
    allAds[i] = loadImage("adsOne" + i + ".png");

  }
    
    furby = loadImage("images/furby.png");
    fb = loadImage("images/fb.png");
    instagram = loadImage("images/instagram.png");
    molang = loadImage("images/molang1.jpg");
    nasa = loadImage("images/nasa.jpg");
    peachMilk = loadImage("images/peach_milk.jpg");
    peachy = loadImage("images/peachy.png");
    spotify = loadImage("images/spotify.png");
    pixelPlant = loadImage("images/pixel_plant.jpg");
    shapes = loadImage("images/shapes1.jpg");
    
    
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style("z-index", -1);
    canvas.position(0,0);
    background(200, 220, 250);
    noStroke();
    console.log("HERE");
    greeting = createP("please type your name and press enter");
    greeting.position(100, 200);
    playerName = createInput("");
    playerName.changed(start);
    playerName.position(100, 240);
   
    
    //timer is set to current millis()
    timer = millis();
    
    imageMode(CENTER);
}

function start(){
    startGame = true;
    playerName.hide();
    greeting.hide();
    nameText = createP("");
    //scoreText = createP("");
    iconSelectText = createP("");
    playButton = createButton("PLAY");
    
    
}

function furbyMine(){
    
    userAgent = navigator.userAgent;
    nameText.html("hi " + playerName.value());
    nameText.position(width/2.5, 300);
    //scoreText.html("you've generated $" + score*10 + " furbycoins!");
    //scoreText.html("you've generated $" + score*10 + " furbycoins on" + userAgent);
    //scoreText.position(200, 200);
    playButton.position(width/2.3, 360);
    playButton.mousePressed(furbyCoords);
    
   
    iconSelectText.html("press play to start");
    iconSelectText.position(width/2.5, 320);
    //fill(230, 250, 250);
    //rect(0, height/2.265, width, width/17);
    //fill(220, 250, 240);
    //rect(0, height/2.22, width, width/20);
    //fill(210, 240, 240);
    //rect(width/3, height/2.22, width/5.25, width/20);
    
    //image(fb, width/10, height/2, width/25, width/25);
    //circle(width/6, height/2, width/25);
    //image(spotify, width/2.7, height/2, width/25, width/25);
    //image(spotify, width/6, height/2, width/25, width/25);
    //image(instagram, width/4.3, height/2, width/22, width/22);
    
    
    
    for(let i=0; i<furbyX.length; i++){
        image(furby, furbyX[i], furbyY[i], 50, 50);
        
        //furbyX[i] gives the element that is indexed with the given # at i
    }
    
    if(score1 == 1){
        startGame = false;
        endGame = true;
    }
}

function furbyCoords(){
    score1++;
    
    
}

function endScreen(){

    nameText.hide();
    //scoreText.hide();
    playButton.hide();
    iconSelectText.hide();
    
//change the timer value to change the timer (in milliseconds)
//right now it's every half second
  if (millis() - timer >= 2000)
  {
    //when timer triggers, add an x, y position in arrays
    adX.push(random(width));
    adY.push(random(height));

    //go through the x,y arrays to fetch the values
    for(let i=0; i<adX.length; i++) {

      //randomly grab an image in your image array and display it
      //with x ,y values
       image(allAds[int(random(allAds.length))],adX[i], adY[i]);
       
    }
    //reset timer to current millis everytime the timer triggers
    //to reset the timer
    timer = millis();

  }
}

function draw(){
    
    if(startGame == true){
        furbyMine();
    }
    
    if(endGame == true){
        endScreen(); 
        blockDraw();
    }

}

// Block game
var blockCanvas = document.getElementById("myblockCanvas");
var ctx = blockCanvas.getContext("2d");
var ballRadius = 10;
var x = blockCanvas.width;
var y = blockCanvas.height;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (blockCanvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 5;    

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
    
function preload(){
    
    //load you images in the images array. You can change the
//amount of images to match yours by changing 2 to whatever.
//your images should be named adsOne0.png, adsOne1.png, etc
    for (let i = 0; i<9; i++){
    allAds[i] = loadImage("images/adsOne" + i + ".png");

  }
     
}    
    
    
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - blockCanvas.offsetLeft;
  if(relativeX > 0 && relativeX < blockCanvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}
function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, blockCanvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "pink";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#pink";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16pxf Arial";
  ctx.fillStyle = "pink";
  ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "green";
  ctx.fillText("Lives: "+lives, blockCanvas.width-65, 20);
}
            
function blockDraw() {
  ctx.clearRect(0, 0, blockCanvas.width, blockCanvas.height);    
  drawBricks();
  drawBall();
  drawPaddle();   
  drawScore();
  drawLives();
  collisionDetection();
  //drawAds();    
  if(x + dx > blockCanvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > blockCanvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if(!lives) {
        document.location.reload();
      }
      else {
        x = blockCanvas.width/2;
        y = blockCanvas.height-30;
        dx = 3;
        dy = -3;
        paddleX = (blockCanvas.width-paddleWidth)/2;
      }
    }
  }
    

  if(rightPressed && paddleX < blockCanvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
   
  x += dx;
  y += dy;
  setTimeout(function() {
      requestAnimationFrame(blockDraw);


    }, 2000);
}

