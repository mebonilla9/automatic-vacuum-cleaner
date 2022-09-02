export class Randomizer {
  constructor() {

  }

  randomNumber(axis) {
    switch (axis) {
      case 'X':
        return Math.floor(Math.random() * 900 - 45) + 45;
      case 'Y':
        return Math.floor(Math.random() * 500 - 45) + 45;
    }
  }
}