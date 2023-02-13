import debounce from "./debouce.js";
export default class Scroll {
  constructor(propriety) {
    this.dataScroll = document.querySelectorAll(propriety);
    this.windowHalf = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 80);
  }

  getDistance() {
    this.distance = [...this.dataScroll].map((s) => {
      const offset = s.offsetTop;
      return {
        element: s,
        offset: Math.floor(offset - this.windowHalf),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((i) => {
      if (window.scrollY > i.offset) i.element.classList.add("ativo");
      else i.element.classList.remove("ativo");
    });
  }

  addEventScroll() {
    window.addEventListener("scroll", this.checkDistance);
  }

  init() {
    if (this.dataScroll.length) {
      this.getDistance();
      this.addEventScroll();
    }
    return this;
  }
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
