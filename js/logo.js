const svg = require("svg.js");
const color = require("color");

class Logo {
  constructor(elementId) {
    this.draw = svg.get(elementId);
    this.draw.attr({
      stroke: "#ff5c5c",
      fill: "#ff5c5c"
    });
    this.originalColor = color(this.draw.attr().fill);
    this.rotateColors();
  }

  rotateColors() {
    window.setInterval(() => {
      this.draw.attr({
        stroke: this.saturateColor(),
        fill: this.saturateColor()
      });
      console.log(this.randomNumber);
      // console.log(this.mixColor("yellow"));
    },
    100)
  }

  mixColor(colorValue) {
    return this.originalColor.mix(color(colorValue)).hex()
  }

  saturateColor() {
    return this.originalColor.saturate(this.randomNumber).hex();
  }

  get randomNumber() {
    min = Math.ceil(1);
    max = Math.floor(100);
    return (Math.floor(Math.random() * (max - min + 1)) + min) / 100; //The maximum is inclusive and the minimum is inclusive 
  }
}

module.exports = Logo;
