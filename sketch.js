function setup() {
    createCanvas(400, 400);
    background("  red");
  }

  function draw() {

    stroke("blue")
    fill("orange")

  if(mouseIsPressed) {
    rect(mouseX, mouseY, 10, 35);
    }
  }
 