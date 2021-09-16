
  img="";
  status="";

  function preload(){
    img= loadImage('dog and a cat.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd, modelLoaded")
    document.getElementById("status").innerHTML ="status:dectingobjects"
}
function modelLoaded(){
    console.log("Model loaded")
    status = true;
    objectDetector.detect(img, gotResults);
}
function draw(){
    image(img,0,0,640,420);
    fill("#fc0303");
    text("Cat", 45,75);
    noFill();
    stroke("#fc0303");
    rect(30,60,300,350);

    fill("#fc0303");
    text("Dog", 320,120);
    noFill();
    stroke("#fc0303");
    rect(300,90,270,320);
}

function gotResult(error,result){
    if(error){
        console.log("error");
    }
    console.log("results");
}


