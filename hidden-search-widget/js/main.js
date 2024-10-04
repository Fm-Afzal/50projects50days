// const search = document.querySelector(".search");
// const btn = document.querySelector(".btn");
// const input = document.querySelector(".input");

// btn.addEventListener("click", () => {
//   search.classList.add("active");
//   input.focus();
// });


const search = document.querySelector(".search"),
  btn = document.querySelector(".btn"),
  input = document.querySelector(".input");

btn.onclick = () => {
  search.classList.toggle("active");
  input.focus();
};



