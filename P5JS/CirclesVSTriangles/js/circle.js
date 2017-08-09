function Circle(pos, cell) {
	this.pos = pos.copy();
	this.r = 45;	
	this.hp = 1;
	this.toDelete = false;
	this.cell = cell;
	this.color = 255;

	this.show = function() {
		fill(this.color);
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);	
		//textSize(32);
		//fill(0, 102, 153);
		//text(this.hp, this.pos.x - 35, this.pos.y);			
	}	

	this.hit = function(damage) {
		this.hp = this.hp - damage;		
		this.color = lerpColor(				
				color(255,0,0),
				color(255),
				this.hp
			);
		if(this.hp <= 0) {
			this.toDelete = true;
			this.cell.hasCircle = false;
		}
	}
}