
var position = 100
function setup() {
    createCanvas(1000, 500)
}

function draw() {
    background(0, 150, 150)

    position = position + 1
    rect(position,0,10,10)
}