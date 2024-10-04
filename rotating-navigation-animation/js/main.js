
var afzal = document.getElementById("open");
var rafat = document.getElementById("close");
var container = document.querySelector(".container");

afzal.addEventListener("click", () => container.classList.add("show-nav"));
rafat.addEventListener("click", () => container.classList.remove("show-nav"));