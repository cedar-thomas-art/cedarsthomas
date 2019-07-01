const svg = require("svg.js");
const saturator = require("./saturator");

class Pattern {
  constructor() {
    const draw = svg("background").size("100%", "100%");
    const rect = draw.rect("100%", "100%")

    this.pattern = draw.pattern(20, 20, function(add) {
      add.rect("100%", "100%").fill("#f06")
      add.rect(10,10)
      add.rect(10,10).move(10,10)
    })

    rect.attr({fill: this.pattern});
  }
}

module.exports = Pattern;
