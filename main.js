function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background('#18f5df');
}

function modelLoaded(){
    console.log('PoseNet is Intalized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
