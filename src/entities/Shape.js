export class Shape {
  constructor(width, height, context, randomizer) {
    this.width = width
    this.height = height
    this.context = context
    this.randomizer = randomizer
    this.x = randomizer.randomNumber('X')
    this.y = randomizer.randomNumber('Y')

    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}