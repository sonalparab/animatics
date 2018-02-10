var canvas = document.getElementById("slate")
var ctx = canvas.getContext('2d');
var stop = document.getElementById("stop");
var start = document.getElementById("start");
var animate = document.getElementById("animate");
var bounce = document.getElementById("bounce");
var cont = document.getElementById("continue");

//Circle
var requestID;
var x = 0;
var growing = true;

var animateCircle = function(){

    window.cancelAnimationFrame(requestID);
    x = 0;
    growing = true; 
    drawCircle();
    
}

var drawCircle = function(){
    window.cancelAnimationFrame(requestID);
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(250,250,x,0,2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "green";
    ctx.fill();
    if(growing)
	x++;
    else
	x--;
    //if touching edges switch to shrinking
    if(x === 250)
	growing = false;
    if(x === 0)
	growing = true;
    requestID = window.requestAnimationFrame(drawCircle);
}


var freeze = function(e){
    window.cancelAnimationFrame(requestID);
}


animate.addEventListener('click',animateCircle);
start.addEventListener('click',drawCircle);
stop.addEventListener('click',freeze);


//Bouncing

//Initializing Variables
//dimensions of rectangle
var length = 100;
var width = 50;
//top left corner
var xcor = 250;
var ycor = 250;
//bottom right corner 
var xcorend = xcor + length;
var ycorend = ycor + width;
//incrementing for movement
var xinc = 3;
var yinc = 2;


var bouncing = function(){
    window.cancelAnimationFrame(requestID);

    xcor = Math.floor(Math.random() * (500-length));
    ycor = Math.floor(Math.random() * (500-width));
    xcorend = xcor + length;
    ycorend = ycor + width;
    
    drawRect();
}


var drawRect = function(){
    window.cancelAnimationFrame(requestID);
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(xcor,ycor,length,width);
    ctx.stroke();
    //if rectangle is touching edges
    // change direction
    if(xcor <=0 || xcorend >= 500)
	xinc *= -1;
    if(ycor <=0 || ycorend >= 500)
	yinc *= -1;
    xcor += xinc;
    ycor += yinc;
    xcorend = xcor + length;
    ycorend = ycor + width;
    requestID = window.requestAnimationFrame(drawRect);
}
    
bounce.addEventListener('click',bouncing);
cont.addEventListener('click',drawRect);
