export default class Selector {
  constructor(select) {
    this.selection = document.querySelectorAll(select);
  }
  selectCharacter(index) {
    if (index - 1) {
      document.body.classList.remove("x");
      document.body.classList.add("rockC");
    } else {
      document.body.classList.remove("rockC");
      document.body.classList.add("x");
    }
  }

  addEventClick() {
    this.selection.forEach((c, index) => {
      c.addEventListener("click", () => {
        this.selectCharacter(index);
      });
    });
  }
  init() {
    this.addEventClick();
  }
}
