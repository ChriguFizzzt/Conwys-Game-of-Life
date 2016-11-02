function init(){
	gen = 0;
	initArrays();
	var canvas = document.getElementById('mycanvas');
	ctx = canvas.getContext('2d');
	running = false;
	this.interval = setInterval(update, 120); //every 160ms update() gets called
}

// initialise the Arrays
function initArrays(){
	cells = new Array(100)
	newcells = new Array(100)
	
	for (i=0; i <100; i++){
		cells[i] = new Array(100);
		newcells[i] = new Array(100);
	}
	for (x = 0; x < 100; x++) {
		for (y = 0; y < 100; y++) {
			cells[x][y] = true;
			newcells[x][y] = true;
		}
	}
}

// launches when startbutton pressed
function start(){
	if(running){
		document.getElementById('startbutton').innerHTML = "Start";
		running = false;
	}else{
		document.getElementById('startbutton').innerHTML = "Stop";
		running = true;
	}
}

function update(){
	if(running){
		// update every Cell
		updateCells();
		
		// update Generation
		gen += 1;
		var gentext = "<i>Generation: </i>"+gen;
		document.getElementById('gen').innerHTML = gentext;
	}
	
	// draw everything
	draw();
}

function draw(){
	ctx.save();
	ctx.clearRect(0,0,600,600);
	
	for (x = 0; x < 100; x++) {
		for (y = 0; y < 100; y++) {
			drawCell(x*6,y*6, 6, 6, cells[x][y]);
		}
	}
	
	ctx.restore();
}

// update every Cell
function updateCells(){
	for (x = 0; x < 100; x++) {
		for (y = 0; y < 100; y++) {
			// Nachbarns ausrechnen
			
			// Entscheiden über Leben und Tod
			
			// in newCells[][] eintragen
		}
	}
	// cells = newcells;
}

// Eine Zelle Zeichnen
function drawCell(x, y, width, height, alive){
	if(alive){
		ctx.fillStyle = "rgba(0,0,0,1)";
	}else{
		ctx.fillStyle = "rgba(255,255,255,1)";
	}
	ctx.fillRect(x,y,width,height);
}










