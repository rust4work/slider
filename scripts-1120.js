const hideBtn = document.querySelector("#hideBtn");
const moreItem = document.querySelector("#more__item");
const btnText = document.querySelector("#button__text");
const iconLess = document.querySelector("#icon__less");

hideBtn.addEventListener("click", function () {
  console.log("clicked");
  moreItem.classList.toggle("moreItem");

  if (moreItem.classList.contains("moreItem")) {
    btnText.textContent = "Показать все";
    iconLess.src = "pics/expand+.svg";
  } else {
    btnText.textContent = "Скрыть";
    iconLess.src = "pics/expand-.svg";
  }
});
