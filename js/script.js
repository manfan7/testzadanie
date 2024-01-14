let menu = document.querySelector("#mobile-menu");
let burger = document.querySelector(".burger");
let adjuster = document.querySelector(".adjust-mobile");
let form = document.querySelector(".form-wrapper");
let exitForm = document.querySelector(".exitform");
let formContent = document.querySelector(".form-content");
let search = document.querySelector(".search-mobiles");
let searchForm = document.querySelector(".search-item_mobile");
let searchFormShow = document.querySelector(".search-show");
let main = document.querySelector(".main");
burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
adjuster.addEventListener("click", () => {
  window.onwheel = null;
  document.body.classList.add("disabled-scroll");
  form.classList.add("show");
});
exitForm.addEventListener("click", () => {
  form.classList.remove("show");
  document.body.classList.remove("disabled-scroll");
});
form.addEventListener("click", (event) => {
  if (event.target === form) {
    form.classList.remove("show");
    document.body.classList.remove("disabled-scroll");
  }
});
search.addEventListener("click", () => {
  searchForm.classList.add("search-show");
  search.style.display = "none";
});
main.addEventListener("click", () => {
  searchForm.classList.remove("search-show");
  search.style.display = "block";
});
