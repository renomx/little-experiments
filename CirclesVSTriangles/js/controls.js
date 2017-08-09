function Control() {
	this.r = 45;
	this.circle;
	this.color = 255;

	this.selectionCircle = function() {
		fill(255);
		this.circle = ellipse(70, height - 70, this.r*2, this.r*2);
	}

	this.selectionCircleTimer = function(frame) {
		if(frame % 60 == 0) {
			this.color = lerpColor(
					color(0,0,0),
					color(255),
					0.5
				);
		}
	}	
}