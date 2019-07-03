page = require('page');
handlebars = require('handlebars');

class Route {
  constructor() {
    this.render("template-nav", this.navElem);

    page('/',                       () => { this.index() });
    page('/works',                  () => { this.works() });
    page('/works/painting-drawing', () => { this.paintingDrawing() });
    page('/works/sculpture',        () => { this.sculpture() });
    page('/works/photography',      () => { this.photography() });
    page('/contact',                () => { this.contact() });
    page('*',                       () => { this.notFound() });
    page();
  }

  render(src, dest, ctx={}) {
    const templateHtml = this.templateSrc(src);
    const hb = handlebars.compile(templateHtml)
    const compiled = hb(ctx);
    dest.innerHTML = compiled;
  }

  index() {
    this.render("template-home", this.homeElem, {hello: "world"});
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

  templateSrc(id) {
    return document.getElementById(id).innerHTML;
  }

  getById(id) {
    return document.getElementById(id);
  }

  get homeElem() {;
    return this.getById("home-content");
  }

  get navElem() {
    return document.getElementsByTagName("nav")[0];
  }
}

module.exports = Route;
