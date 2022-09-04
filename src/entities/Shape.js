export class Shape {
  constructor(width, height, context, randomizer) {
    this.width = width
    this.height = height
    this.context = context
    this.randomizer = randomizer
    this.x = randomizer.randomNumber('X')
    this.y = randomizer.randomNumber('Y')

    this.context.fillStyle = 'black';
    this.context.fill();
    this.context.lineWidth = 2;
    this.context.strokeStyle = '#ff3333';
    this.context.stroke();
    this.context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    )
    
  }
}