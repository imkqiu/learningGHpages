var ball;
var paddle;
var paddle2;
var speed = 5;

function setup() {
  createCanvas(600, 600);
  ball = {
  	x: width/2,
  	y: height/2,
  	xdir: -1,
  	ydir: 0,
  	draw: function(){
  		fill(255);
  		ellipse(this.x,this.y,10,10);
  		this.x += this.xdir*speed;
  		this.y += this.ydir*speed;
  	}
  }
  paddle = new Paddle(10,250);
  paddle2 = new Paddle(580,250);
}


function draw() {
	background(0);
	ball.draw();
	paddle.draw();
	paddle2.draw();
	if (keyIsDown(87)){
		paddle.y -= 5;

	} else if (keyIsDown(83)){
		paddle.y +=5;
	}

	if (paddle.hit(ball)){
		ball.xdir *= -1;
		pickydir();
	}

  if (paddle2.hit(ball)){
    ball.xdir *= -1;
    pickydir();
  }

	if (keyIsDown(79)){
		paddle2.y -= 5;

	} else if (keyIsDown(76)){
		paddle2.y +=5;
	}
  }

  function pickydir(){
  	var num = random(0,1);
  	if (num <= 0.5){
  		ball.ydir = -1;
  	} else if (num >= 0.5){
  		ball.ydir = 1;
  	}
  }

  function Paddle(x,y){
  	this.x = x;
  	this.y = y;
  	this.draw = function(){
  		fill(255);
  		rect(this.x,this.y,10,70);
  		this.y = constrain(this.y,0,530);
  	}
  	this.hit = function(ball){
  		if (this.x == ball.x){
  			if(this.y < ball.y){
  				if (this.y+70 > ball.y){
  					return true;
  				} else{
  					return false;
  				}
  			} else {
  				return false;
  			}
  		} else {
  			return false;
  		}
  	}
  }