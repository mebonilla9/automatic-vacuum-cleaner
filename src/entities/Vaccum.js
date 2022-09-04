export class Vaccum {
  constructor(context) {
    this.shapes = []
    this.context = context
    this.draw()
  }

  draw() {
    this.context.beginPath();
    this.context.arc(30,30,30, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'blue';
    this.context.fill();
    this.context.lineWidth = 2;
    this.context.strokeStyle = '#003300';
    this.context.stroke();
    /* this.context.beginPath()
    this.context.arc(10,10, 40,0,2 * Math.PI,false)
    this.context.fillStyle = 'blue'
    this.content.fill()
    this.content.lineWidth = 3
    this.content.strokeStyle = '#ff3300'
    this.context.stroke();*/
  }
}