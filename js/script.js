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

const homeUl = document.querySelectorAll(".home-img");
const homeLi = document.querySelectorAll(".home-img li");

function handleClick() {
  const homeC = homeLi[0].classList.contains("back");
  if (!homeC) {
    homeLi[0].nextElementSibling.classList.add("front");
    homeLi[0].classList.add("back");
  } else {
    homeLi[0].nextElementSibling.classList.remove("front");
    homeLi[0].classList.remove("back");
  }
}

addEventListener("click", handleClick);
