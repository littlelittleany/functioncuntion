const sounds = Array.from({ length: 6 });
const backgroundColor = [230,220,190];
const myCanvas = {width:600, height:600};

const lineColor = [0, 0, 0,];
const activeLineColor = [255, 255, 255];
const lineWidth = 3;
const activeLineWidth = 9;



const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    speed: 1,
    fillColor: [220,70,130],
    strokeColor: [0,220,20],
    strokeWidth: 15,
    outlineWidth: 10,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 

const ball2 = {
    x: 300,
    y: 100,
    r: 50,
    speed: 2,
    fillColor: [10,10,130],
    strokeColor: [0,220,20],
    outlineWidth: 1,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 200,
    r: 80,
    speed: 2,
    fillColor: [90,80,32],
    strokeColor: [0,220,20],
    outlineWidth: 2,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
} 


const rline = {
    x1: 230,
    y1: 0,
    x2: 230,
    y2: 900,
    color: lineColor,
    width: lineWidth,
}

const lline = {
    x1: 450,
    y1: 0,
    x2: 450,
    y2: 900,
    color: lineColor,
    width: lineWidth,
}

const balls = [ball1, ball2, ball3]; //array

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){   //starter fromm p5 Sketch, declared not running
    createCanvas(800, 800);
    background(230,220,190);
}

//***************DEFAULY <P5>*************


function drawLine ({x1, y1, x2, y2, color, width}) {
    line (x1, y1, x2, y2);
    strokeWeight(width);
    stroke(color);

}  //we declare functions that WILL draw the lines, it is a universal function that applies all the lines that has a same format
//單純的只是一個會劃線的殼 還沒有靈魂/內容物

function draw() { //inorder to make the line actually drawn, we have to call it on to the canvas
   //this is the main funciton that draw eveything onto the browser
    background(backgroundColor);    // callbackground
    
    balls.forEach((ball) => {       //call bballs 
        update(ball);
        drawCircle(ball);

    }) 
    
    drawLine (lline);
    drawLine (rline);
    //use the forEach() method on the Array object, to make this code a little less repetitives
    //drawCircle(ball1); //loop
    //drawCircle(ball2); 
    //drawCircle(ball2); 
    
}

const move = (ball) =>{
    ball.x += ball.speed;
}

function update (ball){
console.log(ball.x);         //console.log(ball); //when to use console..?
    if(ball.x + ball.size/2 > rline.x1 ){
    ball.speed *= -1;
    ball.rightSound.play();
    activateLine(rline);
    } else if(ball.x - ball.size/2 < lline.x1) {
    ball.speed *= -1;
    activateLine(lline);
    ball.leftSound.play();

    }

ball.x+= ball.speed;
}

const drawCircle = ({x, y, r, strokeColor, fillColor}) => {
    //this is for colors elements appear on screen
    /*See how I put that whole object {} in the where we put the arguments, 
    and then put the values we want to grab from that object between those braces?
     This really cleans up our code!
     */
     
     stroke(strokeColor);
     fill(fillColor)
     ellipse(x, y, r);
 
}

function activateLine (line) {

    line.color = activeLineColor;
    line.width = activeLineWidth;

    setTimeout(() => resetLines(line), 500);

}

function resetLines (line){
    line.color = lineColor;
    line.width = linewidth;
}











