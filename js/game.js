/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#3394FF";
ctx.strokeStyle = "#3394FF";
ctx.beginPath();
ctx.arc(100,30,25,0,2*Math.PI);
ctx.stroke();
ctx.closePath();
ctx.fill();
*/

var piece;
var area = {
	canvas : document.getElementById("canvas"),
	start : function() {
		this.canvas.width = 200;
		this.canvas.height = 300;
		this.context = this.canvas.getContext("2d");
		document.body.insertBefore(this.canvas, document.body.childNodes[0]);
		this.interval = setInterval(updateArea, 20);
	},
	stop : function() {
		clearInterval(this.interval);
	},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function startGame() {
	piece = new comp(30, 30, "red", 80, 75);
	area.start();
}

function comp(width, height, color, x, y, type) {
	this.type = type;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.gravity = 0.1;
	this.gravitySpeed = 0;
	this.bounce = 0.6;
	this.update = function() {
		ctx = area.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		this.gravitySpeed += this.gravity;
		this.x += this.speedX;
		this.y += this.speedY + this.gravitySpeed;
		this.hitBottom();
	}
	this.hitBottom = function() {
		var rockbottom = area.canvas.height - this.height;
		if(this.y > rockbottom) {
			this.y = rockbottom;
			this.gravitySpeed = -(this.gravitySpeed * this.bounce);
		}
	}
}

function updateArea() {
	area.clear();
	piece.newPos();
	piece.update();
}