function Square(y) {
	this.pos = createVector(600, y);
	this.y = y;
	this.r = 45;
	this.hp = 300;
	this.toDelete = false;

	this.show = function() {		
		fill(161, 244, 66);
		rect(this.pos.x, this.pos.y, this.r*2, this.r*2);
		textSize(32);
		fill(0, 102, 153);
		text(this.hp, this.pos.x - 35, this.pos.y);
	}

	this.move = function() {		
		this.pos.x = this.pos.x - 18;
	}

	this.hit = function(damage) {
		this.hp = this.hp - damage;
		if(this.hp <= 0) {
			this.toDelete = true;
		}
	}
}