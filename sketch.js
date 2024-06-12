
function setup() {
    createCanvas(400, 400);
    background("#6FEDED")
  }
  
  function draw() {
    stroke("#F5F2F79");
    fill("#F7F5F50")
  
  
     if (mouseIsPressed) {
      rect(mouseX, mouseY,15,10);
     }
  }