let leftElements = document.querySelectorAll(".left-text");
let rightElements = document.querySelectorAll(".right-text");

scrollAnim = () => {
  let windowHt = window.innerHeight;
  leftElements.forEach((elements) => {
    let elementPos = elements.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      elements.classList.add("slide-in-left");
    }
  });
  rightElements.forEach((elements) => {
    let elementPos = elements.getBoundingClientRect().top;
    if (elementPos <= windowHt / 1.3) {
      elements.classList.add("slide-in-right");
    }
  });
};

document.addEventListener("DOMContentLoaded", scrollAnim);

window.addEventListener("scroll", scrollAnim);
