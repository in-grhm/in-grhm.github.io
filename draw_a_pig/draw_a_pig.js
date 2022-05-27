class Draggable {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x = 100;
    this.y = 100;
    // Dimensions
    this.w = 75;
    this.h = 50;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable2 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x2 = 350;
    this.y2 = 60;
    // Dimensions
    this.w2 = 50;
    this.h2 = 50;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x2 && mouseX < this.x2 + this.w2 && mouseY > this.y2 && mouseY < this.y2 + this.h2) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x2 = mouseX + this.offsetX2;
      this.y2 = mouseY + this.offsetY2;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    ellipse(this.x2, this.y2, this.w2, this.h2);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x2 && mouseX < this.x2 + this.w2 && mouseY > this.y2 && mouseY < this.y2 + this.h2) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX2 = this.x2 - mouseX;
      this.offsetY2 = this.y2 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable3 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x3 = 200;
    this.y3 = 200;
    // Dimensions
    this.w3 = 5;
    this.h3 = 10;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x3 && mouseX < this.x3 + this.w3 && mouseY > this.y3 && mouseY < this.y3 + this.h3) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x3 = mouseX + this.offsetX3;
      this.y3 = mouseY + this.offsetY3;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    rect(this.x3, this.y3, this.w3, this.h3);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x3 && mouseX < this.x3 + this.w3 && mouseY > this.y3 && mouseY < this.y3 + this.h3) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX3 = this.x3 - mouseX;
      this.offsetY3 = this.y3 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable4 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x4 = 230;
    this.y4 = 75;
    // Dimensions
    this.w4 = 5;
    this.h4 = 10;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x4 && mouseX < this.x4 + this.w4 && mouseY > this.y4 && mouseY < this.y4 + this.h4) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x4 = mouseX + this.offsetX4;
      this.y4 = mouseY + this.offsetY4;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    rect(this.x4, this.y4, this.w4, this.h4);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x4 && mouseX < this.x4 + this.w4 && mouseY > this.y4 && mouseY < this.y4 + this.h4) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX4 = this.x4 - mouseX;
      this.offsetY4 = this.y4 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable5 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x5 = 45;
    this.y5 = 100;
    // Dimensions
    this.w5 = 10;
    this.h5 = 25;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x5 && mouseX < this.x5 + this.w5 && mouseY > this.y5 && mouseY < this.y5 + this.h5) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x5 = mouseX + this.offsetX5;
      this.y5 = mouseY + this.offsetY5;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    rect(this.x5, this.y5, this.w5, this.h5);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x5 && mouseX < this.x5 + this.w5 && mouseY > this.y5 && mouseY < this.y5 + this.h5) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX5 = this.x5 - mouseX;
      this.offsetY5 = this.y5 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable6 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x6 = 90;
    this.y6 = 200;
    // Dimensions
    this.w6 = 10;
    this.h6 = 25;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x6 && mouseX < this.x6 + this.w6 && mouseY > this.y6 && mouseY < this.y6 + this.h6) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x6 = mouseX + this.offsetX6;
      this.y6 = mouseY + this.offsetY6;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    rect(this.x6, this.y6, this.w6, this.h6);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x6 && mouseX < this.x6 + this.w6 && mouseY > this.y6 && mouseY < this.y6 + this.h6) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX6 = this.x6 - mouseX;
      this.offsetY6 = this.y6 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable8 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x8 = 180;
    this.y8 = 25;
    // Dimensions
    this.w8 = 8;
    this.h8 = 8;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x8 && mouseX < this.x8 + this.w8 && mouseY > this.y8 && mouseY < this.y8 + this.h8) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x8 = mouseX + this.offsetX8;
      this.y8 = mouseY + this.offsetY8;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(0);
    }
    ellipse(this.x8, this.y8, this.w8, this.h8);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x8 && mouseX < this.x8 + this.w8 && mouseY > this.y8 && mouseY < this.y8 + this.h8) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX8 = this.x8 - mouseX;
      this.offsetY8 = this.y8 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable7 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x7 = 100;
    this.y7 = 190;
    // Dimensions
    this.w7 = 8;
    this.h7 = 8;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x7 && mouseX < this.x7 + this.w7 && mouseY > this.y7 && mouseY < this.y7 + this.h7) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x7 = mouseX + this.offsetX7;
      this.y7 = mouseY + this.offsetY7;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(0);
    }
    ellipse(this.x7, this.y7, this.w7, this.h7);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x7 && mouseX < this.x7 + this.w7 && mouseY > this.y7 && mouseY < this.y7 + this.h7) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX7 = this.x7 - mouseX;
      this.offsetY7 = this.y7 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable9 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x9 = 350;
    this.y9 = 190;
    // Dimensions
    this.w9 = 20;
    this.h9 = 5;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x9 && mouseX < this.x9 + this.w9 && mouseY > this.y9 && mouseY < this.y9 + this.h9) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x9 = mouseX + this.offsetX9;
      this.y9 = mouseY + this.offsetY9;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(255, 192, 203);
    } else {
      fill(255, 192, 203);
    }
    rect(this.x9, this.y9, this.w9, this.h9);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x9 && mouseX < this.x9 + this.w9 && mouseY > this.y9 && mouseY < this.y9 + this.h9) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX9 = this.x9 - mouseX;
      this.offsetY9 = this.y9 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable10 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x10 = 250;
    this.y10 = 290;
    // Dimensions
    this.w10 = 3;
    this.h10 = 8;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x10 && mouseX < this.x10 + this.w10 && mouseY > this.y10 && mouseY < this.y10 + this.h10) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x10 = mouseX + this.offsetX10;
      this.y10 = mouseY + this.offsetY10;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(0);
    } else {
      fill(0);
    }
    ellipse(this.x10, this.y10, this.w10, this.h10);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x10 && mouseX < this.x10 + this.w10 && mouseY > this.y10 && mouseY < this.y10 + this.h10) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX10 = this.x10 - mouseX;
      this.offsetY10 = this.y10 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable11 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x11 = 270;
    this.y11 = 190;
    // Dimensions
    this.w11 = 3;
    this.h11 = 8;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x11 && mouseX < this.x11 + this.w11 && mouseY > this.y11 && mouseY < this.y11 + this.h11) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x11 = mouseX + this.offsetX11;
      this.y11 = mouseY + this.offsetY11;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(0);
    } else {
      fill(0);
    }
    ellipse(this.x11, this.y11, this.w11, this.h11);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x11 && mouseX < this.x11 + this.w11 && mouseY > this.y11 && mouseY < this.y11 + this.h11) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX11 = this.x11 - mouseX;
      this.offsetY11 = this.y11 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

class Draggable12 {
  constructor() {

    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?


    this.x12 = 300;
    this.y12 = 150;
    // Dimensions
    this.w12 = 20;
    this.h12 = 20;
  }

  over() {
    // Is mouse over object
    if (mouseX > this.x12 && mouseX < this.x12 + this.w12 && mouseY > this.y12 && mouseY < this.y12 + this.h12) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

  }

  update() {

    // Adjust location if being dragged
    if (this.dragging) {
      this.x12 = mouseX + this.offsetX12;
      this.y12 = mouseY + this.offsetY12;
    }

  }

  show() {

    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(0);
    } else if (this.rollover) {
      fill(0);
    } else {
      noFill(0);
    }
    ellipse(this.x12, this.y12, this.w12, this.h12);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x12 && mouseX < this.x12 + this.w12 && mouseY > this.y12 && mouseY < this.y12 + this.h12) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX12 = this.x12 - mouseX;
      this.offsetY12 = this.y12 - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}

let body;
let head;
let ear1;
let ear2;
let leg1;
let leg2;
let eye1;
let eye2;
let tail;
let snout1;
let snout2;
let snout3;

function setup() {
  createCanvas(640, 360);
  noStroke();
  body = new Draggable(100, 100, 50, 50);
  head = new Draggable2(150, 100, 50, 50);
  ear1 = new Draggable3(200, 200, 5, 30);
  ear2 = new Draggable4(230, 70, 5, 10);
  leg1 = new Draggable5(100, 100, 50, 50);
  leg2 = new Draggable6(100, 100, 50, 50);
  eye1 = new Draggable7(100, 100, 50, 50);
  eye2 = new Draggable8(100, 100, 50, 50);
  tail = new Draggable9(100, 100, 50, 50);
  snout1 = new Draggable10(100, 100, 50, 50);
  snout2 = new Draggable11(100, 100, 50, 50);
  snout3 = new Draggable12(100, 100, 50, 50);
}

function draw() {
  background(255);
  textSize(32);
  text('build a pig!', 10, 30);
  body.over();
  body.update();
  body.show();
  head.over();
  head.update();
  head.show();
  ear1.over();
  ear1.update();
  ear1.show();
  ear2.over();
  ear2.update();
  ear2.show();
  leg1.over();
  leg1.update();
  leg1.show();
  leg2.over();
  leg2.update();
  leg2.show();
  eye1.over();
  eye1.update();
  eye1.show();
  eye2.over();
  eye2.update();
  eye2.show();
  tail.over();
  tail.update();
  tail.show();
  snout1.over();
  snout1.update();
  snout1.show();
  snout2.over();
  snout2.update();
  snout2.show();
  snout3.over();
  snout3.update();
  snout3.show();
  fill(127);
}

function mousePressed() {
  body.pressed();
  head.pressed();
  ear1.pressed();
  ear2.pressed();
  leg1.pressed();
  leg2.pressed();
  eye1.pressed();
  eye2.pressed();
  tail.pressed();
  snout1.pressed();
  snout2.pressed();
  snout3.pressed();
}

function mouseReleased() {
  body.released();
  head.released();
  ear1.released();
  ear2.released();
  leg1.released();
  leg2.released();
  eye1.released();
  eye2.released();
  tail.released();
  snout1.released();
  snout2.released();
  snout3.released();
}
