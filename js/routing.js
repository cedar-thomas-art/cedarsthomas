page = require('page');

class Route {
  constructor() {
    page('/', this.index);
    page('/works', this.works);
    page('/works/painting-drawing', this.paintingDrawing);
    page('/works/sculpture', this.sculpture);
    page('/works/photography', this.photography);
    page('/contact', this.contact);
    page('*', this.notFound);
    page();
  }

  index() {
    console.log("hello world");
  }

  works() {
    console.log("works");
  }

  paintingDrawing() {
    console.log("painting & drawing");
  }

  sculpture() {
    console.log("sculpture");
  }

  photography() {
    console.log("photography");
  }

  contact() {
    console.log("contact");
  }

  notFound() {
    console.log("404 not found");
  }
}

module.exports = Route;
