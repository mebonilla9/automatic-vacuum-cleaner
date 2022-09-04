import { Shape } from './entities/Shape'
import { Randomizer } from './util/Randomizer'
import { Vaccum } from './entities/Vaccum'

export class ShapeGenerator {
  constructor(context, quantity) {
    this.context = context
    this.quantity = quantity
    this.shapes = []
    this.vaccum = undefined
    console.log('generated')
  }

  async generate() {
    this.vaccum = new Vaccum(this.context)
    console.log('defining')
    const randomizer = new Randomizer()
    for (let index = 0; index < this.quantity; index++) {
      this.shapes.push(new Shape(45, 45, this.context, randomizer))
      await this.sleep(1000)
    }
    console.log(this.shapes.length)
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}