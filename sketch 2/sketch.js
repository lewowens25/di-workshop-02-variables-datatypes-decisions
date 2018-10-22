var moving = true
var position = 10
var positionX = 10
var positionY = 250
var directionX = 5
var directionY = 5
var paddleX = 20
var paddleY = 200
var score = 0

function setup() {
    createCanvas(1000, 500)
}

function draw() {
    background(0, 150, 150)
rect (paddleX, paddleY, 10, 75)
fill (155, 155, 0)
    ellipse (positionX, positionY, 10, 10)
if (moving) {
positionX = (positionX + directionX)
positionY = (positionY + directionY)
if (positionY == 495 || positionY == 5) {
    directionY = directionY * -1
}
if (positionX == 995){
    directionX = directionX * -1

if (positionX == 995){
    score = (score + 1)
}
// if (positionX == 10) {
//     alert("Peak, you lost. Your score is " + score)
// }
}
}
console.log("Your sccore is" + score)
}



function mousePressed() {
    moving = !moving
    console.log('moving ' + moving)
}