export default class Scroll {
  constructor(propriety) {
    this.dataScroll = document.querySelectorAll(propriety);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.dataScroll.forEach((s) => {
      const windowHalf = window.innerHeight * 0.6;
      const scrollActive = s.getBoundingClientRect().top;
      const scrollV = windowHalf - scrollActive > 0;
      if (scrollV) {
        s.classList.add("ativo");
      } else {
        s.classList.remove("ativo");
      }
    });
  }

  addEventScroll() {
    window.addEventListener("scroll", this.handleScroll);
  }

  init() {
    this.addEventScroll();
  }
}
