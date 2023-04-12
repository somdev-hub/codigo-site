const nav = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-right");
nav.addEventListener("click", () => {
  console.log("clicked");
  navbar.classList.toggle("flex");
});

console.log(screen.width);

const expand = document.querySelector(".expand-button");
const coordContainer = document.querySelector(".coordinators-container");
expand.addEventListener("click", () => {
  if (coordContainer.style.height == "auto") {
    coordContainer.style.height = "50vh";
    expand.innerHTML = "Expand";
  } else {
    coordContainer.style.height = "auto";
    expand.innerHTML = "Collapse";
  }
});

const testimonials = document.querySelector(".testimonials");
const control1 = document.getElementById("control1");
const control2 = document.getElementById("control2");
const control3 = document.getElementById("control3");

control1.onclick = function () {
  if (screen.width > 640) testimonials.style.transform = "translateX(35rem)";
  else testimonials.style.transform = "translateX(21rem)";
  control1.classList.add("active");
  control2.classList.remove("active");
  control3.classList.remove("active");
};
control2.onclick = function () {
  testimonials.style.transform = "translateX(0px)";
  control1.classList.remove("active");
  control2.classList.add("active");
  control3.classList.remove("active");
};

control3.onclick = function () {
  if (screen.width > 640) testimonials.style.transform = "translateX(-35rem)";
  else testimonials.style.transform = "translateX(-21rem)";
  control1.classList.remove("active");
  control2.classList.remove("active");
  control3.classList.add("active");
};
