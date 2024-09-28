const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const span = document.querySelector("#number-guess");
const submit = document.querySelector("#submit");
const numbers = document.querySelector(".page-one");
const page = document.querySelector(".page-two");

function fone() {
  span.textContent = "1";
}
function ftwo() {
  span.textContent = "2";
}
function fthree() {
  span.textContent = "3";
}
function ffour() {
  span.textContent = "4";
}
function ffive() {
  span.textContent = "5";
}
function fsubmit() {
  numbers.style.display = "none";
  page.style.display = "block";
}
one.addEventListener("click", fone);
two.addEventListener("click", ftwo);
three.addEventListener("click", fthree);
four.addEventListener("click", ffour);
five.addEventListener("click", ffive);
submit.addEventListener("click", fsubmit);
