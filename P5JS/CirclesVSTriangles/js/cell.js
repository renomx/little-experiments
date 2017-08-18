function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.w = w;
	this.pos;
	this.hasCircle = false;

	this.show = function() {
		var x = this.i*this.w+this.w/2;
		var y = this.j*this.w+120+this.w/2;

		this.pos = createVector(x, y);

		rectMode(CENTER);
		stroke(255);
		noFill();
		rect(this.pos.x,this.pos.y,w,w);
	}

	this.clicked = function(x, y) {
		var d = dist(this.pos.x, this.pos.y, x, y);		
		if(d < w/2) {						
			return true;
		} else {
			return false;
		}
	}
}