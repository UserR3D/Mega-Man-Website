const dataScroll = document.querySelectorAll('[data-anime="scroll"]');

function handleScroll() {
  dataScroll.forEach((item) => {
    const windowHalf = window.innerHeight * 0.6;
    const itemTop = item.getBoundingClientRect().top;
    const validation = windowHalf - itemTop > 0;
    if (validation) {
      item.classList.add("ativo");
    } else {
      item.classList.remove("ativo");
    }
  });
}

window.addEventListener("scroll", handleScroll);

const homeLi = document.querySelectorAll(".home-img li");
const homeP = homeLi[0];
const p = document.querySelector(".text-r");
p.classList.add("ativo");
function textTransform() {
  if (homeP.classList.contains("back")) {
    p.classList.remove("ativo");
    p.nextElementSibling.classList.add("ativo");
  } else {
    p.nextElementSibling.classList.remove("ativo");
    p.classList.add("ativo");
  }
}

const selector = document.querySelectorAll("[data-select]");
function handleClick() {
  const homeC = homeLi[0].classList.contains("back");
  if (!homeC) {
    homeP.nextElementSibling.classList.add("front");
    homeP.classList.add("back");
    textTransform();
  } else {
    homeP.nextElementSibling.classList.remove("front");
    homeP.classList.remove("back");
    textTransform();
  }
}

function selectorfun(index) {
  if (index - 1) {
    console.log("oi");
  } else {
    console.log("tchau");
  }
}

selector.forEach((i, index) => {
  i.addEventListener("click", () => {
    selectorfun(index);
  });
});
homeLi.forEach((i) => {
  i.addEventListener("click", handleClick);
});
