function Circle(pos) {
	this.pos = pos.copy();
	this.r = 45;	
	this.hp = 100;

	this.show = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);				
	}	
}