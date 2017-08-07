var cols, rows;
var w = 120;
var intersect;
var circle;
var grid = [];
var circles = [];
var pellets =[];
var squares = [];
var spriteSheetPlants;
var plantAnimation;

function setup() {
	createCanvas(601, 751);
	cols = 4;
	rows = 4;

	spriteSheetPlants = loadSpriteSheet('img/plants.png', 8, 2, 1);
	plantAnimation = loadAnimation(spriteSheetPlants);

	intersect = new Intersect();

	for(var i = 0; i < rows; i++) {
		for(var j = 0; j < cols; j++) {
			var cell = new Cell(j, i, w);
			grid.push(cell);
		}
	}		
}

function draw() {
	background(51);
	
	animation(plantAnimation);

	for(var i = 0; i < grid.length; i++) {		
		grid[i].show();			
	}

	for(var i = 0; i < circles.length; i++) {
		circles[i].show();
		if(frameCount % 60 == 0) {
			var pellet = new Pellet(circles[i].pos);						
			pellets.push(pellet);
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

	
	if(frameCount % 60 == 0 && squares.length < 2) {				
		var square = new Square(grid[floor(random(0,grid.length))].pos.y);			
		squares.push(square);
	}
	for(var i = 0; i < squares.length; i++) {
		squares[i].show();
		if(frameCount % 80 == 0) {
			squares[i].move();
		}		
	}
	for(var i = squares.length - 1; i >= 0; i--) {
		if(squares[i].toDelete) {
			squares.splice(i, 1);
		}
	}	
	
}

function mousePressed() {
	for(var i = 0; i < grid.length; i++) {				
		if(grid[i].clicked(mouseX, mouseY) && grid[i].hasCircle == false) {	
			var circle = new Circle(grid[i].pos);
			circles.push(circle);

			var pellet = new Pellet(circle.pos);
			pellets.push(pellet);

			grid[i].hasCircle = true;
		}
	}
}