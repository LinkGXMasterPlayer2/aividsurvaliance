video = "";
status ="";
function preload(){

    video = createVideo('video.mp4');
    video.hide();

}

function setup(){

    canvas = createCanvas(480,300);
    canvas.center();

}

function draw(){

    image(video, 0, 0, 480, 300);
    
}

function start(){

    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects ";
    
}

function modelLoaded(){

    console.log("model is loaded...");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}