export default class Click {
  constructor(element, text, select) {
    this.imgClick = document.querySelectorAll(element);
    this.text = document.querySelectorAll(text);
    this.selection = document.querySelectorAll(select);
  }
  // #region HomeClick
  textAppear() {
    this.text.forEach((c) => {
      c.classList.toggle("ativo");
    });
  }
  clickHome() {
    const contain = !this.imgClick[0].classList.contains("back");
    if (contain) {
      this.imgClick[0].classList.add("back");
      this.imgClick[1].classList.add("front");
      this.textAppear();
    } else {
      this.imgClick[0].classList.remove("back");
      this.imgClick[1].classList.remove("front");
      this.textAppear();
    }
  }
  // #endregion

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
    this.imgClick.forEach((i) => {
      i.addEventListener("click", () => {
        this.clickHome();
      });
    });
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
