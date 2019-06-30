const svg = require("svg.js");

class Path {
  constructor(svgPath) {
    this.svgPath = svgPath;
  }

  animate() {
  }

  get dAttribute() {
    return this.svgPath.attr("d");
  }

  get transform() {
    return this.svgPath.attr("transform");
  }
}

module.exports = Path;
