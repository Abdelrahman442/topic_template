// toggle nav bar
const togglerIcon = document.querySelector(".nav-toggler i");
const navList = document.querySelector(".nav-list");
togglerIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// stiky header
window.onscroll = () => {
  let header = document.querySelector("#header");
  window.scrollY > 0
    ? header.classList.add("stiky")
    : header.classList.remove("stiky");
};

// toggle questions btns
let questionsBtn = document.querySelectorAll("#questions button");

questionsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    questionsBtn.forEach((btn) => {
      btn.classList.remove("open");
    });
    btn.classList.add("open");
  });
});
