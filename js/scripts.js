const toggleTheme = () => {
  const root = document.body;

  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  let fillColor;
  if (root.classList.contains("light")) {
    fillColor = "black";
  } else if (root.classList.contains("dark")) {
    fillColor = "white";
  }
  element.querySelector(".text svg path").setAttribute("fill", fillColor);
  localStorage.setItem("svgColor", fillColor);
};

const setInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const savedColor = localStorage.getItem("svgColor");

  if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedColor) {
      element.querySelector(".text svg path").setAttribute("fill", savedColor);
    }
  } else {
    document.body.classList.add("light");
    element.querySelector(".text svg path").setAttribute("fill", "black");
  }
};

const element = document.querySelector(".dayNight");

element.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", setInitialTheme);

let ligthTheme = localStorage.getItem("theme");
if (ligthTheme && ligthTheme == "light") {
  document.querySelector("body").classList.remove("dark");
  document.querySelector("body").classList.add("light");
}

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
          ? "Akimov Andriy presentation"
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

function anim(duration) {
  let temp;
  return function (sel) {
    cancelAnimationFrame(temp);
    let start = performance.now();
    let from = window.pageYOffset || document.documentElement.scrollTop,
      to = document.querySelector(sel).getBoundingClientRect().top - 90;
    requestAnimationFrame(function step(timestamp) {
      let progress = (timestamp - start) / duration;
      1 <= progress && (progress = 1);
      window.scrollTo(0, (from + to * progress) | 0);
      1 > progress && (temp = requestAnimationFrame(step));
    });
  };
}
let scrollMenu = anim(500);

document.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(
    document.querySelectorAll(
      "header .navPanel ul li a, footer .footerContainer ul li a "
    ),
    function (e) {
      e.addEventListener("click", function (event) {
        event.preventDefault();
        scrollMenu(e.getAttribute("href"));
        let win = window.innerWidth;
        if (win < 1024) {
          menuToggle();
        }
      });
    }
  );
});
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0);
});

document.querySelector(".ontop").addEventListener("click", function (e) {
  scrollMenu("body");
});
document.querySelectorAll(".buttonResume").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = "porfolio/Developer Resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
