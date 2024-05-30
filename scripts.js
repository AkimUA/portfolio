const toggleTheme = () => {
  const root = document.body;
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    root.classList.add("light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }

  if (root.classList.contains("light")) {
    element.querySelector(".text svg path").setAttribute("fill", "black");
  } else if (root.classList.contains("dark")) {
    element.querySelector(".text svg path").setAttribute("fill", "white");
  }
};
const element = document.querySelector(".dayNight");
element.addEventListener("click", toggleTheme);

function menuToggle() {
  let header = document.querySelector("header");
  header.classList.toggle("active");
  let body = document.querySelector("body");
  body.classList.toggle("lock");
}

let mask = document.querySelector(".mask");
let loader = document.querySelector(".loader");
let header = document.querySelector("header");
let main = document.querySelector("main");
let repeatCount = 0;
let repeatLimit = 2;

window.addEventListener("load", () => {
  function showLoadingText() {
    if (repeatCount < repeatLimit) {
      loader.textContent =
        repeatCount === 0
          ? "Zadrot gaming presentation"
          : "Made in Dnipro, Ukraine";
      loader.classList.add("show");
      setTimeout(() => {
        loader.classList.remove("show");
        setTimeout(showLoadingText, 1000);
      }, 2000);
      repeatCount++;
    } else {
      mask.classList.add("hide");
      setTimeout(() => {
        mask.remove();
        header.classList.add("visible");
        main.classList.add("visible");
      }, 300);
    }
  }

  showLoadingText();
});

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  let navLinks = document.querySelectorAll(
    "header .navPanel ul li a, footer .footerContainer ul li a"
  );

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let anchor = this.getAttribute("href");
      let targetOffset =
        anchor === "#top" ? 0 : document.querySelector(anchor).offsetTop - 90;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });

      var header = document.querySelector("header");
      header.classList.remove("active");

      var body = document.querySelector("body");
      body.classList.remove("lock");
    });
  });
});
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

document.querySelector(".ontop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
