const nav = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-right");
nav.addEventListener("click", () => {
  console.log("clicked");
  navbar.classList.toggle("flex");
});

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
  // document.querySelector(".coordinators-container").style.height="auto";
});
