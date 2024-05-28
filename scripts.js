const toggleTheme = () => {
  const root = document.body;
  if (root.classList.contains("dark")) {
    root.classList.remove("dark");
    root.classList.add("light");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }

  // Перемикання CSS-змінних
  if (root.classList.contains("light")) {
    // root.style.setProperty("--background", "var(--bgLight)");
    // root.style.setProperty("--textColor1", "var(--textLight)");
    element.querySelector(".text svg path").setAttribute("fill", "black");
    element.style.background = "none";
  } else if (root.classList.contains("dark")) {
    // root.style.setProperty("--background", "var(--bgDark)");
    // root.style.setProperty("--textColor1", "var(--textDark)");
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
