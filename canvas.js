var canvas = document.getElementById("slate")
var ctx = canvas.getContext('2d');
var s = document.getElementById("stop");
var animate = document.getElementById("animate");
var requestID;

var animateCircle = function(){

    window.cancelAnimationFrame(requestID);
    var x = 0;
    var growing = true;
    
    var drawCircle = function(){
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
	if(x === 250)
	    growing = false;
	if(x === 0)
	    growing = true;
	requestID = window.requestAnimationFrame(drawCircle);
    }
    drawCircle();
    
    
}

var stop = function(e){
    window.cancelAnimationFrame(requestID);
}


animate.addEventListener('click',animateCircle);
s.addEventListener('click',stop);
