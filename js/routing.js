page = require('page');
handlebars = require('handlebars');

class Route {
  constructor() {
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
    return new Promise((resolve, reject) => {
      const templateHtml = this.templateSrc(src);
      const hb = handlebars.compile(templateHtml)
      const compiled = hb(ctx);
      dest.innerHTML = compiled;
      resolve(compiled);
    });
  }

  index() {
    const logoLink = this.getById("main-logo-link");
    const logo = this.getById("main-logo");

    logoLink.addEventListener("click", () => {
      logo.classList.remove("home");
      this.render("template-nav", this.navElem)
        .then(() => {
          this.worksLink.addEventListener("click", () => {
            this.worksSection.classList.toggle("open");
          });
      });
    });
  }

  works() {
    console.log("works");
  }

  paintingDrawing() {
    this.render("template-nav", this.navElem);
    console.log("painting & drawing");
  }

  sculpture() {
    this.render("template-nav", this.navElem);
    console.log("sculpture");
  }

  photography() {
    this.render("template-nav", this.navElem);
    console.log("photography");
  }

  contact() {
    this.render("template-nav", this.navElem);
    console.log("contact");
  }

  notFound() {
    this.render("template-nav", this.navElem);
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

  get worksLink() {
    return this.getById("nav-works");
  }

  get worksSection() {
    return this.getById("works-section");
  }
}

module.exports = Route;
