function Circle(pos) {
	this.pos = pos.copy();
	this.r = 45;	
	this.hp = 1000;
	this.toDelete = false;

	this.show = function() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);	
		textSize(32);
		fill(0, 102, 153);
		text(this.hp, this.pos.x - 35, this.pos.y);			
	}	

	this.hit = function(damage) {
		this.hp = this.hp - damage;
		if(this.hp <= 0) {
			this.toDelete = true;
		}
	}
}