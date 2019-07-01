const color = require("color");
const randomNumber = require("./random-number");

class Saturator {
  constructor(originalColor) {
    this.originalColor = color(originalColor);
  }

  get randomlySaturated() {
    return this.originalColor.saturate(this.randomNumber).hex();
  }

  get randomNumber() {
    return new randomNumber().float;
  }
}

module.exports = Saturator;
