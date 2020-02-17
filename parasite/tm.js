let canvas;
let video;
let classifier;
let flippedVideo;

var capture;
var tracker;


let caption = "you know what kind of plan never fails? no plan at all.";
let label = "...waiting";
let warning = "watch out!";

function preload(){
  //add a link to your own data set here
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sn_N_PVT/model.json');
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 video = createCapture(VIDEO);
 video.size(640, 480);
 video.hide();

 flippedVideo = ml5.flipImage(video);
    
     
 classifyVideo();
 
    
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

function draw() {
  background(0);
  image(video, 0, 0);

  textSize(20);
  textAlign(CENTER, CENTER);
  fill(255);

    if(label == "empty frame"){
       text(caption, width/2, height - 70);
        
    }
    
    if(label == "person in frame"){
        text(warning, width/2, height - 70);
    }
}
