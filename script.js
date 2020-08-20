// Responsive navbar
const menu = document.querySelector(".menu");
const ul = document.querySelector(".home__nav ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("active");
  console.log("toggle");
});
