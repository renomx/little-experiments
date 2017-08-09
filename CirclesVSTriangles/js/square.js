function Square(y) {
	this.pos = createVector(600, y);
	this.y = y;
	this.r = 45;
	this.hp = 300;
	this.damage = 10;
	this.toDelete = false;
	this.color = color(161, 244, 66);

	this.show = function() {		
		fill(this.color);
		rect(this.pos.x, this.pos.y, this.r*2, this.r*2);
		//textSize(32);
		//fill(0, 102, 153);
		//text(this.hp, this.pos.x - 35, this.pos.y);
	}

	this.move = function() {		
		this.pos.x = this.pos.x - 0.4;
	}

	this.hit = function(damage) {
		this.hp = this.hp - damage;
		this.color = lerpColor(
				color(255,0,0),
				color(0,255,0),
				this.hp * 0.01
			);
		if(this.hp <= 0) {
			this.toDelete = true;
		}
	}
}