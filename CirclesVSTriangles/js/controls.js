function Control() {
	this.r = 45;
	this.circle;
	this.color = 255;

	this.selectionCircle = function() {
		fill(this.color);
		this.circle = ellipse(70, height - 70, this.r*2, this.r*2);
	}
}