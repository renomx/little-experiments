function Pellet(pos) {
	this.pos = pos.copy();
	this.r = 10;
	this.damage = 0.1;
	this.toDelete = false;

	this.show = function() {
		fill(200);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);			
	}

	this.move = function() {
		this.pos.x = this.pos.x + 10;
	}

	this.remove = function() {
		this.toDelete = true;
	}
}