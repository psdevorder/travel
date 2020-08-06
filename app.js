const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  header.classList.toggle("open");
  lines.forEach(line => {
    line.classList.toggle("closed");
  });
});
