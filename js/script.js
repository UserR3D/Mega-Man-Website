const homeUl = document.querySelectorAll(".home-img");
const homeImg = document.querySelectorAll(".home-img li");
function handleClick(event) {
  homeImg.forEach((item) => {
    item.classList.toggle("ativo");
  });
}
homeUl[0].addEventListener("click", handleClick);
