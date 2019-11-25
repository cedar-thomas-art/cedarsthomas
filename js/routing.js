const page = require("page");
const handlebars = require("handlebars");

class Route {
  init() {
    page("/", () => { this.index(); });
    page("/about", () => { this.about(); });
    page("/works", () => { this.works(); });
    page("/works/painting-drawing", () => { this.paintingDrawing(); });
    page.exit("/works/painting-drawing", () => { this.clear(); });
    page("/works/sculpture", () => { this.sculpture(); });
    page("/works/photography", () => { this.photography(); });
    page("/contact", () => { this.contact(); });
    page("*", () => { this.notFound(); });
    page();
  }

  clear() {
    this.mainContentElem.innerHTML = "";
  }

  render(src, dest, ctx = {}) {
    return new Promise((resolve, reject) => {
      const templateHtml = this.templateSrc(src);
      const hb = handlebars.compile(templateHtml);
      const compiled = hb(ctx);
      dest.innerHTML = compiled;
      resolve(compiled);
    });
  }

  append(src, dest, ctx = {}) {
    return new Promise((resolve, reject) => {
      const templateHtml = this.templateSrc(src);
      const hb = handlebars.compile(templateHtml);
      const compiled = hb(ctx);
      dest.innerHTML += compiled;
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
    this.render("template-imgs", this.mainContentElem)
      .then(() => {
        const imgLinks = document.getElementsByClassName("works-img-link");

        Array.prototype.forEach.call(imgLinks, (link) => {
          link.addEventListener("click", (event) => {
            const img = event.target.closest("img");
            event.preventDefault();
            this.render("template-img-container", this.mainContentElem)
              .then(() => {
                const container = this.getByClass("img-container")[0];
                container.innerHTML = img.outerHTML;
              });
          });
        });
      });
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

  about() {
    console.log("about");
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

  getByClass(className) {
    return document.getElementsByClassName(className);
  }

  get pageBody() {
    return document.getElementsByTagName("body")[0];
  }

  get mainContentElem() {
    return this.getById("main-content-container");
  }

  get homeElem() {
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

  get modalContainer() {
    return this.getById("img-modal-container");
  }
}

module.exports = Route;
