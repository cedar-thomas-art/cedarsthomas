const svg = require("svg.js");
const color = require("color");

class Logo {
  constructor(elementId) {
    this.templateSvg = svg.get(elementId);
    this.paths = [];
    this.children.forEach((child) => {
      if (this.hasPath(child)) {
        this.paths.push(new Path(child));
      }
    });

    this.generatedLogo = svg('generated').size('100%', '100%');
    this.generatedLogo.viewbox(0, 0, 203.2, 75.99);
    this.generatedLogo.attr({
      stroke: "#ff5c5c",
      fill: "#ff5c5c"
    });
    this.originalColor = color(this.generatedLogo.attr().fill);

    this.paths.forEach((p) => {
      this.generatedLogo.path(p.path).attr("transform", p.transform);
    });
    this.rotateColors();
  }

  rotateColors() {
    window.setInterval(() => {
      this.generatedLogo.attr({
        stroke: this.saturateColor(),
        fill: this.saturateColor()
      });
    },
    100)
  }

  mixColor(colorValue) {
    return this.originalColor.mix(color(colorValue)).hex()
  }

  saturateColor() {
    return this.originalColor.saturate(this.randomNumber).hex();
  }

  hasPath(elem) {
    return typeof elem.attr("d") !== "undefined";
  }

  get children() {
    return this.templateSvg.children();
  }

  get randomNumber() {
    return new RandomNumber().float;
  }
}


class Path {
  constructor(elem) {
    this.elem = elem;
  }

  animate() {
    console.log("animate");
  }

  isFloat(v) {
    return !Number.isNaN(parseFloat(v));
  }

  get path() {
    return this.elem.attr("d");
  }

  get transform() {
    return this.elem.attr("transform");
  }

  get pathData() {
    return this.path.split(",");
  }

  get randomFloat() {
    return new RandomNumber().float;
  }
}

class RandomNumber {
  constructor() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    this.number = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get float() {
    return this.number / 100;
  }
}

module.exports = Logo;
