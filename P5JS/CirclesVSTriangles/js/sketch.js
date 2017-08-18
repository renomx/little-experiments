var cols, rows;
var w = 120;
var intersect;
var circleControl;
var grid = [];
var circles = [];
var pellets =[];
var squares = [];
var spriteSheetPlants;
var plantAnimation;
var timer;

function setup() {
	createCanvas(651, 751);
	cols = 4;
	rows = 4;	

	intersect = new Intersect();

	for(var i = 0; i < rows; i++) {
		for(var j = 0; j < cols; j++) {
			var cell = new Cell(j, i, w);
			grid.push(cell);
		}
	}	

	circleControl = new Control();	
}

function draw() {
	background(51);

	circleControl.selectionCircle();

	for(var i = 0; i < grid.length; i++) {		
		grid[i].show();			
	}


	for(var i = circles.length - 1; i >= 0; i--) {	
		circles[i].show();
		if(frameCount % 60 == 0) {
			var pellet = new Pellet(circles[i].pos);						
			pellets.push(pellet);			
		}	
		if(circles[i].toDelete) {
			circles.splice(i, 1);
		}		
	}

	for(var i = 0; i < pellets.length; i++) {
		pellets[i].show();				
		pellets[i].move();
		
		if(squares.length > 0) {
			for(var j = 0; j < squares.length; j++) {
				if(intersect.check(pellets[i], squares[j])){
					pellets[i].remove();
					squares[j].hit(pellets[i].damage);
				}
			}			
		} else {
			if(pellets[i].pos.x > windowWidth) {
				pellets[i].remove();
			}
		}
	}

	for(var i = pellets.length - 1; i >= 0; i--) {
		if(pellets[i].toDelete) {
			pellets.splice(i, 1);
		}
	}	

	
	if(frameCount % floor(random(250, 300)) == 0 && squares.length < 4) {			
		var square = new Square(grid[floor(random(0,grid.length))].pos.y);				
		squares.push(square);		
	}

	for(var i = squares.length - 1; i >= 0; i--) {
		var move = true;
		var circleBeignHit;
		squares[i].show();	
		for(var j = 0; j < circles.length; j++) {
			if(intersect.check(circles[j], squares[i])) {				
				move = false;
				circleBeignHit = circles[j];
				break;			
			}			
		}	
		if(move) {
			squares[i].move();		
		} else {
			circleBeignHit.hit(squares[i].damage);
		}
		if(squares[i].toDelete || squares[i].pos.x < 0) {
			squares.splice(i, 1);
		}
	}	
	
}

function mousePressed() {
	if(circles.length > 0) {
		setTimeout(addCircle, 3000);
	} else {
		addCircle();
	}
}

function addCircle() {
	for(var i = 0; i < grid.length; i++) {				
		if(grid[i].clicked(mouseX, mouseY) && grid[i].hasCircle == false) {	
			var circle = new Circle(grid[i].pos, grid[i]);
			circles.push(circle);

			grid[i].hasCircle = true;
		}
	}
}