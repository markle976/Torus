/**
 * Board
 *
 */
var Board = function(options) {

	this.level = 0;

	// could use a for in, or jQuery extend
	if (options.hasOwnProperty('level')) {
		this.level = parseInt(options.level, 10);
	}

	this.toriods = [];

	//console.log(this);
	
	this.loop();

}

// ------------------------------------------------------------------------

Board.prototype.loop = function() {

	var self = this;
	console.log(self);
	
	toroid = new Toriod();
	
	
	setTimeout(function() { self.loop(); }, 1000);

}




// ------------------------------------------------------------------------

Board.prototype.addToroid = function(toroid) {

	this.toroids.push(toroid);
	
	console.log(this.toroids);
	
	// should add to matrix2 (multidimentional array) instead

/*
	var numBlocks = blocks.length;
	
	for (var i = 0; i < numBlocks; i++) {

		this.matrix.push(blocks[i]);
	}
*/
	
}




/*
Blockus.prototype.hitCheck = function(blocks) {

	var numBlocks = blocks.length;
	var matrixLength = this.matrix.length;
	var xNext, yNext;
	
	// check if any of our blocks have hit bottom or existing blocks
	for (var i = 0; i < numBlocks; i++) {

		yNext = blocks[i].y + 1;
		xNext = blocks[i].x;
	
		// bottom
		if (yNext === 15) {
			return false;
		} 
		
		// existing blocks
		for (var j = 0; j < matrixLength; j++) {
			if (this.matrix[j].y === yNext && this.matrix[j].x === xNext) {
				return false;
			}
		}
		
	}
	
	return true;

}

// ------------------------------------------------------------------------

Blockus.prototype.addBlocks = function(blocks) {

	var numBlocks = blocks.length;
	
	for (var i = 0; i < numBlocks; i++) {

		this.matrix.push(blocks[i]);
	}
	
}

// ------------------------------------------------------------------------

Blockus.prototype.overflow = function() {
	
	var matrixLength = this.matrix.length;

	for (var i = 0; i < matrixLength; i++) {

		if (this.matrix[i].y < 0) {
			return true;
		}
	}
	
}

// ------------------------------------------------------------------------

Blockus.prototype.torusCheck = function() {
	
	var matrixLength = this.matrix.length;
	
	// check if there are 12 y's in a row
	var columns = [];
	
	for (var j = 0; j < 15; j++) {

		columns[j] = 0;

		for (var i = 0; i < matrixLength; i++) {

			if (this.matrix[i].y == j) {
				columns[j]++;
			}
		
		}
		
		if (columns[j] > 11) {
			console.log(columns[j]);
			this.clearLine(j);
		}
	}
	
}

// ------------------------------------------------------------------------

Blockus.prototype.clearLine = function(number) {

	var matrixLength = this.matrix.length;

	for (var i = 0; i < matrixLength; i++) {

		if (this.matrix[i].y == number) {

		    shape = {};
			shape.x = this.matrix[i].x;
			shape.y = this.matrix[i].y;
			shape.x *= 40;
			shape.y *= 40;
			
			context.clearRect(shape.x, shape.y, 40, 40);
			
			this.matrix[i].delete;
		}
		
		if (this.matrix[i].y > number) {
			this.matrix[i].y += 1;
			// now redraw
		}
	
	}	

}

*/


// can't readjust blocks!!!


// ------------------------------------------------------------------------

/**
 * NEW
 *
 */



