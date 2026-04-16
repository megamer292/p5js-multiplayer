var px = 0;
var py = 0;
var list = [];
const socket = io("http://172.22.244.100:2077/");

socket.on('connection', () => {
	console.log("connected");
});

socket.on("positions", listy=>{
	list = listy;
})

function setup() {

	createCanvas(window.innerWidth, window.innerHeight);
	background(100);
}

function draw() {
	background(100);
	if (keyIsDown(LEFT_ARROW)) {
		px -= 1;
	}
	if (keyIsDown(RIGHT_ARROW)) {
		px += 1;
	}
	if (keyIsDown(UP_ARROW)) {
		py -= 1;
	}
	if (keyIsDown(DOWN_ARROW)) {
		py += 1;
	}
	socket.emit("pos", [px, py]);
	for (let i=0; i<list.length;i++) {
		circle(list[i][0], list[i][1], 10);
	}
}
