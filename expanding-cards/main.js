const panels = document.querySelectorAll(".panel");

panels.forEach((element) => {
  element.addEventListener("click", () => {
    removeActiveClass();
    element.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((element) => {
    element.classList.remove("active");
  });
}



