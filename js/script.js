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
let numberFrom = document.querySelector("#numberfrom");
let numberTo = document.querySelector("#numberto");
let spanFrom = document.querySelector(".numberfrom");
let spanTo = document.querySelector(".numberto");
let numberFromMobile = document.querySelector("#numberfrommobile");
let numberToMobile = document.querySelector("#numbertomobile");
let spanFromMobile = document.querySelector(".numberfrommobile");
let spanToMobile = document.querySelector(".numbertomobile");
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
numberFrom.addEventListener("input", () => {
  if(numberFrom.value.length > 8){ numberFrom.value = numberFrom.value.slice(0, 8)}

if(numberFrom.value.length == 0){ spanFrom.innerHTML = "500 000"}
else{ spanFrom.innerHTML = numberFrom.value}
 });
numberTo.addEventListener("input", () => {
  if(numberTo.value.length > 8){ numberTo.value = numberTo.value.slice(0, 8)}

if(numberTo.value.length == 0){ spanTo.innerHTML = "25 000 000"}
else{ spanTo.innerHTML = numberTo.value}
 });
numberFromMobile.addEventListener("input", () => {
  if(numberFromMobile.value.length > 8){ numberFromMobile.value = numberFromMobile.value.slice(0, 8)}

if(numberFromMobile.value.length == 0){ spanFromMobile.innerHTML = "500 000"}
else{ spanFromMobile.innerHTML = numberFromMobile.value}
 });
numberToMobile.addEventListener("input", () => {
  if(numberToMobile.value.length > 8){ numberToMobile.value = numberToMobile.value.slice(0, 8)}

if(numberToMobile.value.length == 0){ spanToMobile.innerHTML = "25 000 000"}
else{ spanToMobile.innerHTML = numberToMobile.value}
 });
