
status1 = "";
function setup(){
canvas = createCanvas(400,300);
canvas.center();
video = createCapture(VIDEO);
video.size(400,300);
video.hide();
}


function draw(){
image(video,0,0,400,300);
}


function preload(){

}


function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Object";

}


function modelLoaded(){
    console.log("model loaded");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0)
}