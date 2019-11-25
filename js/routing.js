const page = require("page");

class Route {
  init() {
    page("/", () => { this.index(); });
    page();
  }

  index() {
    const imgLinks = this.getByClass("works-img-link");

    Array.prototype.forEach.call(imgLinks, (link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.scroll(0, 0);
      });
    });
  }

  getById(id) {
    return document.getElementById(id);
  }

  getByClass(className) {
    return document.getElementsByClassName(className);
  }
}

module.exports = Route;
