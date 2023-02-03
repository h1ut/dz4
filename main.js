const counter = document.querySelector("#counter");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");

let num = 0;

function numberCounter() {
  counter.textContent = num.toString();
}

addBtn.addEventListener("click", () => {
  num++;
  numberCounter();

});

subBtn.addEventListener("click", () => {
  num--;
  numberCounter();

});

numberCounter();