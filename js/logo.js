const svg = require("svg.js");
const path = require("./path");
const randomNumber = require("./random-number");
const color = require("color");

class Logo {
  constructor(elementId) {
    this.templateSvg = svg.get(elementId);
    this.paths = [];
    this.children.forEach((child) => {
      if (this.hasPath(child)) {
        this.paths.push(new path(child));
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
      this.generatedLogo.path(p.dAttribute).attr("transform", p.transform);
    });

    this.rotateColors();
    this.startAnimation();
  }

  startAnimation() {
    this.paths.forEach((p) => {
      p.animate();
    });
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
    return new randomNumber().float;
  }
}

module.exports = Logo;
