document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("hideBtn");
  const esheItems = document.querySelectorAll(".slider__item.eshe");
  const buttonText = document.getElementById("button__text");
  const icon = document.getElementById("icon__less");

  esheItems.forEach((item) => {
    if (item.style.display !== "grid" && item.style.display !== "none") {
      item.style.display = "none";
    }
  });

  button.addEventListener("click", function () {
    if (esheItems.length > 0) {
      const allHidden = Array.from(esheItems).every(
        (item) => item.style.display === "none"
      );

      esheItems.forEach((item) => {
        if (allHidden) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });

      if (allHidden) {
        buttonText.textContent = "Скрыть";
        icon.src = "pics/expand-.svg";
      } else {
        buttonText.textContent = "Показать все";
        icon.src = "pics/expand+.svg";
      }
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
