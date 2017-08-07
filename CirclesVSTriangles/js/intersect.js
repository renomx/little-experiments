function Intersect() {
	this.check = function(obj1, obj2) {		
		var d = dist(obj1.pos.x, obj1.pos.y, obj2.pos.x, obj2.pos.y);
		if(d < obj1.r + obj2.r) {
			return true;
		} else {
			return false;
		}
	}
}