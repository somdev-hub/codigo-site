const nav = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-right");
nav.addEventListener("click", () => {
  console.log("clicked");
  navbar.classList.toggle("flex");
});
