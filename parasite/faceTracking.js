// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker;

//let startGame = false;

let canvas;
let video;
let classifier;
let flippedVideo;

let caption = "you know what kind of plan never fails? no plan at all.";
let rich = "if I had all this money, I'd be nice too!"
let ironed = "it all gets ironed out..."
let label = "...waiting";
let warning = "watch out";

let modelURL = 'https://teachablemachine.withgoogle.com/models/sn_N_PVT/';

var w = 640,
    h = 480;

let counter = 0;
let graphX = 0;
let graphSpeed = 1;

let parasiteButton;
let notParasiteButton;
let parasiteQuestion;

function preload(){
  //add a link to your own data set here
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 video = createCapture(VIDEO);
 video.size(640, 480);
 video.hide();

 flippedVideo = ml5.flipImage(video);    
 classifyVideo();
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();
    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);

    parasiteQuestion = createP("are you a parasite?");
    parasiteQuestion.position(20, 1);
    parasiteButton = createButton("yes");
    parasiteButton.position(20, 50);
    notParasiteButton = createButton("no");
    notParasiteButton.position(20, 80);
}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResults);
}

function gotResults(error, results){
  if(error){
    console.log(error);
    return
  }
  label = results[0].label;
  classifyVideo();
  console.log(results);
}


function yesMousePressed(){
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(rich, width/2, height - 16);
}

function noMousePressed(){
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(ironed, width/2, height - 100);
}

function draw() {
    
    imageMode(CORNERS);
    image(capture, 0, 0, w, h);
    var positions = tracker.getCurrentPosition();
    imageMode(CENTER);
    noFill();
    stroke(255);
//    beginShape();
//    for (var i = 0; i < positions.length; i++) {
//        vertex(positions[i][0], positions[i][1]);
//    }
//    endShape();
//
//    noStroke();
//    for (var i = 0; i < positions.length; i++) {
//        fill(map(i, 0, positions.length, 0, 360), 50, 100);
//        ellipse(positions[i][0], positions[i][1], 4, 4);
//        text(i, positions[i][0], positions[i][1]);
//    }

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(20, 20, smile * 3, 20);

        // uncomment for a surprise
         noStroke();
         fill(0, 0, 0);
         rect(positions[19][0], positions[24][1], 150, 30);
    }
    
    
    fill(0);
    rect(width/30, height - 30, 600, 30);
    
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);

    
    
      if(label == "empty frame"){
       text(caption, width/2, height - 16);
        
    }
    
    if(label == "person in frame"){
        text(warning, width/2, height - 16);
        parasiteButton.mousePressed(yesMousePressed);
        notParasiteButton.mousePressed(noMousePressed)
    }
    
    
}
