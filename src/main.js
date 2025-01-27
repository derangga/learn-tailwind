import Typed from "typed.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttonToggle = document.getElementById("menu-button");
  const menuContainer = document.getElementById("menu-container");

  buttonToggle.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
  });

  const typed = new Typed("#experience-type", {
    strings: ["Website", "Mobile Apps", "Backend"],
    typeSpeed: 50,
    loop: true,
  });
});
